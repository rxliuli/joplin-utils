import joplin from 'joplin-plugin-api'
import { readdir } from 'fs-extra'
import * as path from 'path'
import * as os from 'os'

joplin.plugins.register({
  onStart: async function () {
    await joplin.commands.register({
      name: 'hello',
      label: 'hello world',
      async execute(): Promise<any> {
        const list = await readdir(path.resolve(os.userInfo().homedir))
        alert('list: ' + list.join(', '))
      },
    })
  },
})
