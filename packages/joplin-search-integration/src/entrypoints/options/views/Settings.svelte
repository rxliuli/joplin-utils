<script lang="ts">
  import * as Card from '$lib/components/ui/card'
  import { Button } from '$lib/components/ui/button'
  import { Label } from '$lib/components/ui/label'
  import { Input } from '$lib/components/ui/input'
  import { joplinDataApi } from 'joplin-api'
  import { toast } from 'svelte-sonner'

  interface Config {
    baseUrl: string
    token: string
  }

  let config: Config | undefined

  $: {
    ;(async () => {
      if (config) {
        await browser.storage.local.set(config)
      }
    })()
  }

  onMount(async () => {
    const c = (await browser.storage.local.get({
      baseUrl: 'http://localhost:41184',
      token: '',
    })) as typeof config
    config = c
  })

  async function onCheck() {
    const c = (await browser.storage.local.get({
      baseUrl: 'http://localhost:41184',
      token: '',
    })) as Config
    if (!c.baseUrl) {
      toast.error('Base URL is required')
      return
    }
    if (!c.token) {
      toast.error('Token is required')
      return
    }
    const api = joplinDataApi({ ...c, type: 'rest' })
    try {
      await api.note.list({ limit: 1 })
    } catch (e) {
      toast.error('Invalid Base URL or Token')
      return
    }
    toast.success('Valid Base URL and Token')
  }
</script>

<main
  class="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-950 dark:to-gray-800 flex flex-col items-center justify-center p-4"
>
  <Card.Root class="w-[350px]">
    <Card.Header>
      <Card.Title>Settings</Card.Title>
      <Card.Description class="hidden"></Card.Description>
    </Card.Header>
    <Card.Content>
      {#if config}
        <form>
          <div class="grid w-full items-center gap-4">
            <div class="flex flex-col space-y-1.5">
              <Label for="baseUrl">Base URL</Label>
              <Input id="baseUrl" bind:value={config.baseUrl} />
            </div>
            <div class="flex flex-col space-y-1.5">
              <Label for="token">Token</Label>
              <Input id="token" type="password" bind:value={config.token} />
            </div>
          </div>
        </form>
      {/if}
    </Card.Content>
    <Card.Footer>
      <Button variant="secondary" on:click={onCheck}>Check</Button>
    </Card.Footer>
  </Card.Root>
</main>
