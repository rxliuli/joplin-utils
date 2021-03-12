> Migrate to: https://github.com/rxliuli/joplin-utils/tree/master/libs/joplin-blog

# joplin-blog

## Scenario

Are you as annoyed as I am with the trouble of maintaining notes and blogs in sync at the same time? If you use joplin as a note taking tool and hexo/vuepress as a blog generator, you can choose this tool to connect them.

## Use

Way 1

1. add the configuration file `.joplin-blog.json` (refer to [configuration](#configuration) for details)
2. export notes as a blog using the command `npx joplin-blog`

Way 2

1. navigate to the hexo blog directory at the command line
2. add dependency `yarn add -D joplin-blog` 3. add configuration file `.joplin-blog`
3. add a configuration file `.joplin-blog.json` (refer to [configuration](#configuration) for details)
4. add an npm script file `"imp": "joplin-hexo"` 5.
5. Run the command `yarn imp` 6.
6. You can see that the `source/_posts` directory already contains all the exported notes

## Example

- [hexo](https://github.com/rxliuli/joplin-blog/tree/master/tutorials/hexo-example)
- [vuepress](https://github.com/rxliuli/joplin-blog/tree/master/tutorials/vuepress-example)

## Configuration

public

| configuration       | type            | description                                           |
| ------------------- | --------------- | ----------------------------------------------------- |
| `type`              | `hexo/vuepress` | type of integrated blog                               |
| `rootPath`          | `string`        | hexo/vuepress directory, which should normally be `.` |
| `joplinProfilePath` | `string`        | joplin personal folder                                |
| `token`             | `string`        | token for joplin web service                          |
| `port`              | `number`        | joplin web service's port                             |
| `tag`               | `string`        | joplin's blog tag                                     |

hexo

| configuration     | type       | description                                 |
| ----------------- | ---------- | ------------------------------------------- |
| `stickyTopIdList` | `string[]` | top note ids (only works with fluid topics) |

I used this tool to share 170+ notes, blog address (Chinese)
https://blog.rxliuli.com/
