import { useSignal } from '@preact/signals'
import { useInterval } from 'react-use'
import { sendMessage } from '../message'

export default function App() {
  const count = useSignal(new Date())

  useInterval(() => {
    count.value = new Date()
  }, 100)

  async function onPostMessage() {
    console.log(await sendMessage('add', 1, 2))
  }

  return (
    <div>
      <h1>Joplin Batch</h1>
      <div>{count.value.toJSON()}</div>
      <button onClick={onPostMessage}>postMessage</button>
    </div>
  )
}
