<script lang="ts">
  import Router from 'svelte-spa-router'
  import Settings from './views/Settings.svelte'
  import Note from './views/Note.svelte'
  import { Toaster } from '$lib/components/ui/sonner'

  const routes = {
    '/note/:id': Note,
    '/': Settings,
    '*': Settings,
  }

  onMount(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark')
    }
  })
</script>

<Router {routes} />
<Toaster richColors />

<style>
</style>
