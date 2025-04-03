<script lang="ts">
  import type { SearchNote, SearchPlugin } from './plugins/plugin'
  import { sendMessage } from '../model/messaging'
  import { detectBackground } from '$lib/detectTheme'
  import Button from '$lib/components/ui/button/button.svelte'

  interface Props {
    plugin: SearchPlugin
  }

  let { plugin }: Props = $props()

  let list: SearchNote[] = $state([])

  onMount(async () => {
    const keyword = plugin.getQuery()
    if (!keyword) return
    const c = await browser.storage.local.get(['baseUrl', 'token'])
    if (!c.baseUrl || !c.token) {
      alert('Please set the Base URL and Token in the settings page')
      await sendMessage('openSettings', undefined)
      return
    }
    list = await sendMessage('search', keyword)
  })

  onMount(() => {
    if (detectBackground()) {
      document.querySelector('joplin-search-plugin')?.shadowRoot?.querySelector('html')?.classList.add('dark')
    }
  })
</script>

<main>
  <nav class="flex flex-col gap-2 py-4">
    {#each list as it}
      <Button
        variant={'link'}
        class="block text-left truncate px-0"
        onclick={async (e) => {
          e.preventDefault()
          await sendMessage('openNote', it.id)
        }}
      >
        {it.title}
      </Button>
    {/each}
  </nav>
</main>
