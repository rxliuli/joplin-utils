import { joplinDataApi } from 'joplin-api'

export async function getJoplinDataApi() {
  return joplinDataApi({
    type: 'rest',
    ...((await browser.storage.local.get({
      baseUrl: 'http://localhost:41184',
      token: '',
    })) as {
      baseUrl: string
      token: string
    }),
  })
}
