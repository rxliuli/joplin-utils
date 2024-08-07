import { useInterval } from 'react-use'
import { sendMessage } from '../../message'
import { Button } from '../components/ui/button'
import { useDeepSignal } from 'deepsignal/react'
import { webviewJoplinDataApi } from '@/lib/webviewDataApi'

export function DemoView() {
  const count = useDeepSignal({
    value: new Date(),
  })

  useInterval(() => {
    count.value = new Date()
  }, 100)

  async function onPostMessage() {
    console.log(await sendMessage('add', 1, 2))
  }

  async function onInvokeDataApi() {
    const list = webviewJoplinDataApi().note.list
    console.log(await list({ limit: 1 }))
  }

  return (
    <div>
      <h1>Joplin Batch</h1>
      <div>{count.value.toJSON()}</div>
      <Button onClick={onPostMessage}>postMessage</Button>
      <Button onClick={onInvokeDataApi}>invokeDataApi</Button>
    </div>
  )
}
