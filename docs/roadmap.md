# route map

## recent goals

- [ ] Achieve a blog project associated with joplin from scratch
- [ ] Allow users to complete export, packaging, and deployment operations without touching the underlying dependency
      framework
- [ ] Implement a wiki generator
- [ ] Support docsify
- [ ] Support vuepress
- [ ] Integrated into the joplin plugin to provide a certain degree of visual interface

## Long-term goals

- Located in the batch processing tool, it may need to support some degree of plug-in (somewhat similar to the joplin
  plug-in, but in contrast, it is completely interacted with the joplin data api, which is lighter, such as user.js and
  chrome plug-in Difference between)
- Some feasible batch processing functions
  - Search and replace strings in all notes
  - Better import the markdown directory, and automatically parse the attachment resource local files in it
  - Import hexo blog, parse yaml metadata and write joplin through api to avoid information loss
  - Check attachment resources that have never been used
  - Check old notes
  - Check the internal quoted note link and rename the linked text to the note title
  - Edit the labels of notes in batches
  - Batch conversion .drawio => .drawio.svg
  - Batch convert .km => .km.svg
  - Batch download externally linked resources to joplin and use them as internal attachment resources
