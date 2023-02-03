import { it } from 'vitest'
import { extractJoplinLink } from '../extractJoplinLink'

it('extractJoplinLink', () => {
  extractJoplinLink(`
[皎然记-司夏.mp3](:/4b638fd91af2417e9fd0942c3e04ea0c)

[flower.webm](:/b160280b7d94417bb7f64d5fd1969230)


[1. Welcome to Joplin!](:/b6175f189a4e4c1cbea14c72848c54cb)
`)
})
