<script lang="ts">
  import { onMount } from 'svelte'
  import { md2html } from '$lib/md2html'
  import type { NoteProperties } from 'joplin-api'
  import { params } from 'svelte-spa-router'
  import { trimTitleStart } from '$lib/trimTitleStart'
  import { ExternalLinkIcon } from 'lucide-svelte'
  import Button from '$lib/components/ui/button/button.svelte'
  import { getJoplinDataApi } from '$lib/api'

  let note: Pick<NoteProperties, 'id' | 'title' | 'body'>
  let html: string

  async function fetchNoteAndConvertToHtml(id: string)
  {
    const noteID = id.split('#').at(0) as string
    const api = await getJoplinDataApi()
    note = await api.note.get(noteID, ['id', 'title', 'body'])
    document.title = trimTitleStart(note.title)
    const config = (await browser.storage.local.get({
      baseUrl: 'http://localhost:41184',
      token: '',
      currentNoteId: noteID,
    })) as { baseUrl: string; token: string;  currentNoteId: string;}
    html = md2html(note.body, config)
  }

  async function scrollToSection(delay: number = 0) {
    await tick()
    const urlFragment = window.location.hash.split('#')[2];
    if (urlFragment) {
      setTimeout(() => {
        const targetElement = document.getElementById(urlFragment);
        if (targetElement) {
          targetElement.scrollIntoView();
          window.location.hash = window.location.hash + '-'
        }
      }, delay);
    }
  }

  $: if ($params?.id) {
    fetchNoteAndConvertToHtml($params.id)
    scrollToSection()
  }

  onMount(() => {
    if ($params?.id) {
      fetchNoteAndConvertToHtml($params.id)
    }
    if (window.location.hash.endsWith('-')) {
      window.location.hash = window.location.hash.slice(0, -1)
    }
    scrollToSection(200)
  })
</script>

<svelte:head>
  {#if note?.title}
    <title>{note.title}</title>
  {/if}
</svelte:head>

<main>
  {#if html}
    <div class="container mx-auto prose dark:prose-invert p-8">
      <h1>{note.title}</h1>
      {@html html}
    </div>
  {/if}

  <Button
    variant="ghost"
    size="icon"
    class="fixed right-4 bottom-4 h-16 w-16 p-2 rounded-full"
    on:click={() => {
      window.open(`joplin://x-callback-url/openNote?id=${note.id}`, '_self')
    }}
  >
    <ExternalLinkIcon />
  </Button>
</main>
