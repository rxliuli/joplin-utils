import React from 'react'
import { asGenerator } from '../lib/pageUtil'
import { Button } from '@/components/ui/button'
import { Loader2, ReplaceAllIcon, ReplaceIcon } from 'lucide-react'
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

export function ReplaceAllView() {
  const list = useDeepSignal({
    value: [] as SearchNote[],
  })
  const form = useDeepSignal({
    search: 'joplin',
    replace: 'vscode',
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
  useMount(onSearch)

  const [replaceAllState, onReplaceAll] = useAsyncFn(async () => {
    if (!form.replace || !form.replace) {
      return
    }
    for (const it of list.value) {
      await replaceById(it)
    }
  })

  const boxState = useDeepSignal({ isOpen: false, activeIndex: 0 })
  const isDesktop = useMedia('(min-width: 768px)')

  async function replaceById(note: SearchNote) {
    const replace = (s: string) => s.replaceAll(new RegExp(form.search, 'gi'), form.replace)
    await dataApi.note.update({ ...note, title: replace(note.title), body: replace(note.body) })
    list.value = list.value.filter((it) => it.id !== note.id)
  }

  const [replaceSingleState, onReplaceSingle] = useAsyncFn(async () => {
    if (!form.replace || !form.replace) {
      return
    }
    if (!boxState.isOpen) {
      return
    }
    const it = list.value[boxState.activeIndex]
    await replaceById(it)
    boxState.isOpen = false
  })

  return (
    <div>
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
      <ScrollArea>
        <ul className={'flex flex-col'}>
          {list.value.map((it, i) => (
            <li
              key={it.id}
              className={cn(
                'flex justify-between items-center gap-2 p-2 rounded hover:bg-gray-300 hover:cursor-pointer',
                {
                  'bg-gray-200': i % 2 === 0,
                },
              )}
              onClick={() => {
                boxState.isOpen = true
                boxState.activeIndex = i
              }}
            >
              <span>{it.title}</span>
              <ReplaceIcon className={'h-4 w-4 hover:cursor-pointer'} />
            </li>
          ))}
        </ul>
      </ScrollArea>
      <Drawer open={boxState.isOpen} onOpenChange={(value) => (boxState.isOpen = value)}>
        <DrawerContent>
          <div className="mx-auto w-full max-w-xl">
            <DrawerHeader>
              <DrawerTitle>Replace</DrawerTitle>
              <DrawerDescription>{list.value[boxState.activeIndex]?.title}</DrawerDescription>
            </DrawerHeader>
            <div>
              <DiffView
                search={form.search}
                replace={form.replace}
                text={list.value[boxState.activeIndex]?.body}
                onReplace={onReplaceAll}
              />
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
    </div>
  )
}

function DiffView(props: { search: string; replace: string; text?: string; onReplace: () => void }) {
  return (
    <pre
      className={
        'select-text px-4 h-[60vh] overflow-y-auto font-medium overflow-x-hidden text-ellipsis whitespace-pre-wrap'
      }
    >
      {reactStringReplace(props.text, props.search, (match, i) => {
        return [
          <del key={i} className={'line-through bg-red-200'}>
            {match}
          </del>,
          <span key={i + 1} className={'bg-green-200'}>
            {props.replace}
          </span>,
        ]
      })}
    </pre>
  )
}
