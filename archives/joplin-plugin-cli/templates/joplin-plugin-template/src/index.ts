import joplin from 'joplin-plugin-api'

joplin.plugins.register({
  onStart: async function () {
    console.info('Hello world. Test plugin started!')
  },
})
