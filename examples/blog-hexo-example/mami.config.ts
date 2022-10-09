import { defineConfig, hexoOutput, joplinInput } from 'mami'
import json from './.joplin-blog.json'

export default defineConfig({
  plugins: [joplinInput(json), hexoOutput()],
})
