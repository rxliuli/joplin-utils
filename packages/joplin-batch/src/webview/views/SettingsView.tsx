import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { useDeepSignal } from 'deepsignal/react'
import { joplinDataApi } from 'joplin-api'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { useAsyncFn } from 'react-use'
import { Loader2 } from 'lucide-react'
import { useSignalEffect } from '@preact/signals-react'
import { getSettings, setSettings } from '@/lib/dataApi'
import { Link } from '@liuli-util/react-router'

export function SettingsView() {
  const settings = useDeepSignal<{
    baseUrl?: string
    token?: string
  }>(getSettings())

  useSignalEffect(() => {
    setSettings(settings)
  })

  const [state, onCheck] = useAsyncFn(async () => {
    if (!settings.baseUrl) {
      throw new Error('Base URL is required')
    }
    if (!settings.token) {
      throw new Error('Token is required')
    }
    const api = joplinDataApi({
      type: 'rest',
      baseUrl: settings.baseUrl,
      token: settings.token,
    })
    try {
      if (!(await api.joplin.ping())) {
        throw new Error('Web Clipper Service is not running')
      }
    } catch {
      throw new Error('Web Clipper Service is not running')
    }
    try {
      await api.note.list({ limit: 1 })
    } catch {
      throw new Error('Token is invalid')
    }
    return true
  })
  return (
    <div>
      <form>
        <div className={'mb-4'}>
          <Label htmlFor={'baseUrl'} className={'block mb-2'}>
            Base URL
          </Label>
          <Input
            id={'baseUrl'}
            value={settings.baseUrl}
            onChange={(ev) => (settings.baseUrl = ev.target.value)}
            type={'url'}
          />
        </div>
        <div className={'mb-4'}>
          <Label htmlFor={'token'} className={'block mb-2'}>
            Token
          </Label>
          <Input
            id={'token'}
            value={settings.token}
            onChange={(ev) => (settings.token = ev.target.value)}
            type={'password'}
          />
        </div>
        <div>
          <Button onClick={onCheck} disabled={state.loading}>
            {state.loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Check
          </Button>
          <Button variant={'link'}>
            <Link target={'_blank'} to={'https://joplinapp.org/help/apps/clipper'}>
              How to get the token
            </Link>
          </Button>
          <div>
            {state.error && <span className={'text-red-500'}>{state.error.message}</span>}
            {state.value && <span className={'text-green-500'}>Success</span>}
          </div>
        </div>
      </form>
    </div>
  )
}
