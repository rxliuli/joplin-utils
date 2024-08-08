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
import { cn } from '@/lib/utils'
import { getPlatform } from '@/lib/getPlatform'

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

export function CleanUnusedResourcesView() {
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
    <div className={'h-full flex flex-col overflow-hidden'}>
      <header className={'flex justify-end items-center gap-2 mb-2'}>
        <Button onClick={doFetch} disabled={state.loading}>
          {state.loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Check
        </Button>
        <Button
          disabled={list.value.length === 0 || state.loading || deleteState.loading}
          variant={'destructive'}
          onClick={onDeleteAll}
        >
          {deleteState.loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Delete all
        </Button>
      </header>
      <div className={'flex-1 overflow-y-auto'}>
        {!(settings?.baseUrl && settings.token) && getPlatform() === 'desktop' && (
          <Alert className={'mb-2 text-yellow-600 border-yellow-600 [&>svg]:text-yellow-600'}>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Warn</AlertTitle>
            <AlertDescription>
              <div>Please set the Joplin Web Clipper Service address and token in the settings to view the image.</div>
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
                <RenderItem key={it.id} resource={it} onDelete={onDelete} settings={settings} />
              ))}
            </ul>
          </ScrollArea>
        )}
        {list.value.length === 0 && !state.loading && (
          <div className="flex items-center justify-center h-full">
            <div className="text-gray-500">No unused resources found</div>
          </div>
        )}
      </div>
    </div>
  )
}

function RenderItem(props: {
  resource: Pick<ResourceProperties, 'id' | 'title' | 'mime'>
  onDelete: (id: string) => void
  settings?: { baseUrl?: string; token?: string }
}) {
  const { resource, onDelete, settings } = props
  return (
    <li key={resource.id} className="bg-secondary rounded-lg p-4">
      <div
        className={cn('flex flex-wrap justify-between items-center', {
          'mb-2': resource.mime.startsWith('image/') && settings?.baseUrl && settings.token,
        })}
      >
        <span className="font-medium overflow-hidden text-ellipsis whitespace-nowrap max-w-[calc(100%-120px)]">
          {resource.title}
        </span>
        <div className="space-x-2">
          <Button variant="destructive" size="sm" onClick={() => onDelete(resource.id)}>
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </Button>
        </div>
      </div>
      {resource.mime.startsWith('image/') && settings?.baseUrl && settings.token && (
        <ZoomableImage
          src={buildResourceUrl(resource.id)}
          alt={resource.title}
          className="mx-auto h-40 object-contain rounded-md mt-2"
        />
      )}
    </li>
  )
}
