import { Signal, useSignal } from '@preact/signals'
import LoadingSvg from './assets/loading.svg?react'

interface AsyncState<T extends (...args: any[]) => Promise<T>> {
  state: {
    value: Signal<Awaited<ReturnType<T>> | null>
    loading: Signal<boolean>
    error: Signal<unknown | null>
  }
  execute: T
}

export function useAsyncFn<T extends (...args: any[]) => Promise<any>>(fn: T): AsyncState<T> {
  const value = useSignal(null)
  const loading = useSignal(false)
  const error = useSignal<unknown | null>(null)
  return {
    state: { value, loading, error },
    execute: (async (...args) => {
      try {
        loading.value = true
        value.value = await fn(...args)
        error.value = null
        return value.value
      } catch (e) {
        error.value = e
        value.value = null
      } finally {
        loading.value = false
      }
    }) as T,
  }
}

export function Loading(props: { text?: string }) {
  return (
    <div class={'flex items-center'}>
      <LoadingSvg className={'animate-spin -ml-1 mr-3 h-5 w-5 text-white'} />
      <span>{props.text}</span>
    </div>
  )
}
