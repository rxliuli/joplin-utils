# joplin-hexo-blog

## Scenario

Are you as annoyed as I am about the hassle of maintaining notes and blogs in sync at the same time? If you use joplin as a note taking tool and hexo as a blog generator, you can choose this tool to connect them.

## Use

Way 1

1. add the configuration file `.joplin-blog.json` (refer to [configuration](#configuration) for details)
2. export notes as a blog using the command `npx @liuli-moe/joplin-hexo-blog`

Way 2

1. Navigate to the hexo blog directory at the command line
2. add dependency `yarn add @liuli-moe/joplin-hexo-blog`
3. add a configuration file `.joplin-blog.json` (refer to [config](#configuration) for details)
4. add an npm script file `"imp": "joplin-hexo"` 5.
5. Run the command `yarn imp` 6.
6. You can see that the `source/_posts` directory already contains all the exported notes

## configuration

| configuration | type | description |
| ------------------- | ---------- | ------------------------------- |
| `hexoPath` | `string` | The location of the hexo directory, which should normally be `. ` |
| `joplinProfilePath` | `string` | joplin personal folder |
| `token` | `string` | token for joplin web service |
| `port` | `number` | joplin web service's port |
| `tag` | `string` | joplin's blog tag |
| `stickyTopIdList` | `string[]` | top note ids |
