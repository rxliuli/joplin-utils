<script lang="ts">
  import Router from 'svelte-spa-router'
  import Settings from './views/Settings.svelte'
  import Note from './views/Note.svelte'
  import { detectTheme } from '$lib/detectTheme'
  import { Toaster } from '$lib/components/ui/sonner'

  const routes = {
    '/note/:id': Note,
    '/': Settings,
    '*': Settings,
  }

  onMount(() => {
    if (detectTheme()) {
      document.documentElement.classList.add('dark')
    }
  })
</script>

<Router {routes} />
<Toaster />

<style>
</style>
