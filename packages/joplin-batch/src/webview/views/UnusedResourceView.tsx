import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { AlertCircle, Loader2, Trash2 } from 'lucide-react'
import { useAsyncFn, useLocalStorage, useMedia, useMount } from 'react-use'
import { ResourceProperties } from 'joplin-api'
import { useDeepSignal } from 'deepsignal/react'
import { asGenerator } from '../lib/pageUtil'
import { dataApi, getSettings } from '../lib/dataApi'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Link } from '@liuli-util/react-router'
import ZoomableImage from '@/components/3rd/ZoomableImage'

async function isUse(id: string): Promise<boolean> {
  const res = await dataApi.search.search({
    query: `"](:/${id})"`,
  })
  return res.items.length > 0
}

function buildResourceUrl(id: string): string {
  const settings = getSettings()
  return `${settings?.baseUrl}/resources/${id}/file?token=${settings?.token}`
}

export function CheckUnusedResourceView() {
  const list = useDeepSignal({
    value: [] as Pick<ResourceProperties, 'id' | 'title' | 'mime'>[],
  })
  const [state, doFetch] = useAsyncFn(async () => {
    list.value = []
    const stream = asGenerator(dataApi.resource.list.bind(dataApi.resource))({
      fields: ['id', 'title', 'mime'],
      order_by: 'user_updated_time',
      order_dir: 'DESC',
    })
    for await (const it of stream) {
      if (!(await isUse(it.id))) {
        list.value.push(it as Pick<ResourceProperties, 'id' | 'title' | 'mime'>)
      }
    }
  }, [])

  async function onDelete(id: string) {
    await dataApi.resource.remove(id)
    list.value = list.value.filter((it) => it.id !== id)
  }

  const [deleteState, onDeleteAll] = useAsyncFn(async () => {
    for (const it of list.value) {
      await onDelete(it.id)
    }
  })

  useMount(doFetch)

  const [settings] = useLocalStorage<{
    baseUrl?: string
    token?: string
  }>('joplin-batch-settings')
  return (
    <div>
      <header className={'flex justify-end items-center gap-2 mb-2'}>
        <Button onClick={doFetch} disabled={state.loading}>
          {state.loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Check
        </Button>
        <Button disabled={list.value.length === 0 || deleteState.loading} variant={'destructive'} onClick={onDeleteAll}>
          {deleteState.loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Delete all
        </Button>
      </header>
      <div>
        {!(settings?.baseUrl && settings.token) && (
          <Alert className={'mb-2 text-yellow-600 border-yellow-600 [&>svg]:text-yellow-600'}>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Warn</AlertTitle>
            <AlertDescription>
              <div>Please set the Joplin server address and token in the settings to view the image.</div>
              <Link to={'/settings'} className={'text-blue-600 underline'}>
                Go to Settings
              </Link>
            </AlertDescription>
          </Alert>
        )}
        {state.error && <div>Error: {state.error.message}</div>}
        {list.value.length > 0 && (
          <ScrollArea className="rounded-md">
            <ul className="space-y-4">
              {list.value.map((it) => (
                <li key={it.id} className="bg-secondary rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium overflow-hidden text-ellipsis whitespace-nowrap max-w-[calc(100%-120px)]">
                      {it.title}
                    </span>
                    <div className="space-x-2">
                      <Button variant="destructive" size="sm" onClick={() => onDelete(it.id)}>
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </Button>
                    </div>
                  </div>
                  {it.mime.startsWith('image/') && settings?.baseUrl && settings.token && (
                    <ZoomableImage
                      src={buildResourceUrl(it.id)}
                      alt={it.title}
                      className="mx-auto h-40 object-contain rounded-md mt-2"
                    />
                  )}
                </li>
              ))}
            </ul>
          </ScrollArea>
        )}
      </div>
    </div>
  )
}
