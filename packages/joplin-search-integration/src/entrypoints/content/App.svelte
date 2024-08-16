<script lang="ts">
  import type { SearchNote, SearchPlugin } from './plugins/plugin'
  import { sendMessage } from '../model/messaging'
  import { detectTheme } from '$lib/detectTheme'
  import Button from '$lib/components/ui/button/button.svelte'
  import { toast } from 'svelte-sonner'
  import { Toaster } from '$lib/components/ui/sonner'

  export let plugin: SearchPlugin

  let list: SearchNote[] = []

  onMount(async () => {
    const keyword = plugin.getQuery()
    if (!keyword) return
    const c = await browser.storage.local.get(['baseUrl', 'token'])
    if (!c.baseUrl || !c.token) {
      toast.info('Please set the Base URL and Token in the settings page', {
        action: {
          label: 'Goto Settings',
          onClick: async () => {
            await sendMessage('openSettings', undefined)
          },
        },
      })
      return
    }
    list = await sendMessage('search', keyword)
  })

  onMount(() => {
    if (detectTheme()) {
      document.querySelector('joplin-search-plugin')?.shadowRoot?.querySelector('html')?.classList.add('dark')
    }
  })
</script>

<main>
  <nav class="flex flex-col gap-2">
    {#each list as it}
      <Button
        variant={'link'}
        class="block text-left truncate"
        on:click={async (e) => {
          e.preventDefault()
          await sendMessage('openNote', it.id)
        }}
      >
        {it.title}
      </Button>
    {/each}
  </nav>

  <Toaster />
</main>

<style>
</style>
