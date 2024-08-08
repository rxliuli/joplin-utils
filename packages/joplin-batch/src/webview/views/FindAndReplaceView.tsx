import React from 'react'
import { asGenerator } from '../lib/pageUtil'
import { Button } from '@/components/ui/button'
import { Diff, Loader2, ReplaceAllIcon, ReplaceIcon } from 'lucide-react'
import { useAsyncFn, useMount, useMedia } from 'react-use'
import { useDeepSignal } from 'deepsignal/react'
import { NoteProperties } from 'joplin-api'
import { dataApi } from '../lib/dataApi'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer'
import reactStringReplace from 'react-string-replace'

type SearchNote = Pick<NoteProperties, 'id' | 'title' | 'body' | 'user_created_time'>

interface FormType {
  search: string
  replace: string
}

export function FindAndReplaceView() {
  const list = useDeepSignal({
    value: [] as SearchNote[],
  })
  const form = useDeepSignal<FormType>({
    search: '',
    replace: '',
  })
  const [state, onSearch] = useAsyncFn(async () => {
    list.value = []
    const stream = asGenerator(dataApi.search.search.bind(dataApi.search))({
      query: form.search,
      fields: ['id', 'title', 'body', 'user_updated_time'],
      order_by: 'user_updated_time',
      order_dir: 'DESC',
    })
    for await (const it of stream) {
      list.value.push(it)
    }
  })

  const [replaceAllState, onReplaceAll] = useAsyncFn(async () => {
    if (!form.replace || !form.replace) {
      return
    }
    for (const it of list.value) {
      await replaceById(it, form.search, form.replace)
      list.value = list.value.filter((i) => i.id !== it.id)
    }
  })

  const [replaceSingleState, onReplaceSingle] = useAsyncFn(async (note: SearchNote) => {
    if (!form.search) {
      return
    }
    const active = list.value[boxState.activeIndex]
    await replaceById(note, form.search, form.replace)
    list.value = list.value.filter((i) => i.id !== note.id)
    if (active.id === note.id) {
      boxState.isOpen = false
    }
  })

  const boxState = useDeepSignal({ isOpen: false, activeIndex: 0 })
  const isDesktop = useMedia('(min-width: 768px)')

  return (
    <div className={'h-full flex flex-col'}>
      <header className={'gap-2 mb-2'}>
        <form className={'flex flex-col gap-2'}>
          <div>
            <Input placeholder={'Search'} value={form.search} onChange={(ev) => (form.search = ev.target.value)} />
          </div>
          <div>
            <Input placeholder={'Replace'} value={form.replace} onChange={(ev) => (form.replace = ev.target.value)} />
          </div>
          <div>
            <Button onClick={onSearch} disabled={state.loading} className={'mr-2'}>
              {state.loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Search
            </Button>
            <Button
              disabled={list.value.length === 0 || replaceAllState.loading}
              variant={'destructive'}
              onClick={onReplaceAll}
            >
              {replaceAllState.loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Replace all
            </Button>
          </div>
        </form>
      </header>
      <div className={cn('flex-1 overflow-hidden', { 'flex w-full': isDesktop })}>
        <ScrollArea
          className={cn('h-full overflow-y-auto', {
            'flex-none min-w-72': isDesktop,
            'w-full': isDesktop && !boxState.isOpen,
          })}
        >
          <ul className={'flex flex-col'}>
            {list.value.map((it, i) => (
              <li
                key={it.id}
                className={cn(
                  'flex justify-between items-center gap-2 p-2 rounded hover:bg-gray-300 hover:cursor-pointer',
                  {
                    'bg-gray-200': i % 2 === 1,
                  },
                )}
                onClick={() => {
                  boxState.isOpen = true
                  boxState.activeIndex = i
                }}
              >
                <span className={'font-medium'}>{it.title}</span>
                <ReplaceIcon className={'h-4 w-4 hover:cursor-pointer'} onClick={() => onReplaceSingle(it)} />
              </li>
            ))}
          </ul>
        </ScrollArea>
        {isDesktop ? (
          <div className={'flex-1 overflow-x-auto'}>
            {boxState.isOpen && <DiffView text={list.value[boxState.activeIndex]?.body} form={form} />}
          </div>
        ) : (
          <DrawerView list={list} form={form} boxState={boxState} />
        )}
      </div>
    </div>
  )
}

async function replaceById(note: SearchNote, search: string, replace: string) {
  const replaceAll = (s: string) => s.replaceAll(new RegExp(search, 'gi'), replace)
  await dataApi.note.update({ ...note, title: replaceAll(note.title), body: replaceAll(note.body) })
}

function DrawerView(props: {
  list: { value: SearchNote[] }
  form: FormType
  boxState: {
    isOpen: boolean
    activeIndex: number
  }
}) {
  const { list, boxState, form } = props

  const [replaceSingleState, onReplaceSingle] = useAsyncFn(async () => {
    if (!form.replace || !form.replace) {
      return
    }
    if (!boxState.isOpen) {
      return
    }
    const it = list.value[boxState.activeIndex]
    await replaceById(it, form.search, form.replace)
    list.value = list.value.filter((i) => i.id !== it.id)
    boxState.isOpen = false
  })
  return (
    <Drawer open={boxState.isOpen} onOpenChange={(value) => (boxState.isOpen = value)}>
      <DrawerContent>
        <div className="mx-auto w-full max-w-xl">
          <DrawerHeader>
            <DrawerTitle>Replace</DrawerTitle>
            <DrawerDescription>{list.value[boxState.activeIndex]?.title}</DrawerDescription>
          </DrawerHeader>
          <div className={'h-[60vh] overflow-y-auto'}>
            <DiffView form={form} text={list.value[boxState.activeIndex]?.body} />
          </div>
          <DrawerFooter>
            <Button onClick={onReplaceSingle}>
              {replaceSingleState.loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Replace
            </Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

function DiffView(props: { form: FormType; text?: string }) {
  return (
    <pre className={'select-text px-4 font-medium overflow-x-hidden text-ellipsis whitespace-pre-wrap'}>
      {reactStringReplace(props.text, props.form.search, (match, i) => {
        return [
          <del key={i} className={'line-through bg-red-200'}>
            {match}
          </del>,
          <span key={i + 1} className={'bg-green-200'}>
            {props.form.replace}
          </span>,
        ]
      })}
    </pre>
  )
}
