# joplin-blog

## Scenario

Are you as annoyed as I am about the hassle of maintaining notes and blogs in sync at the same time? If you use joplin
as a note taking tool and hexo as a blog generator, you can choose this tool to connect them.

## Use

Way 1

1. add the configuration file `.joplin-blog.json` (refer to [configuration](#configuration) for details)
2. export notes as a blog using the command `npx joplin-blog`

Way 2

1. navigate to the hexo blog directory at the command line
2. add dependency `yarn add -D joplin-blog` 3. add configuration file `.joplin-blog`
3. add a configuration file `.joplin-blog.json` (refer to [configuration](#configuration) for details)
4. add an npm script file `"imp": "joplin-blog"` 5.
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
| `token`             | `string`        | joplin web clipper's token                            |
| `port`              | `number`        | the port of the joplin web clipper, usually `41184`   |
| `tag`               | `string`        | joplin's blog tag                                     |

hexo

| configuration     | type       | description                                                                                                               |
| ----------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------- |
| `stickyTopIdList` | `string[]` | topped notes id (only works under [fluid topics](https://github.com/fluid-dev/hexo-theme-fluid/blob/master/README_en.md)) |

I've shared over 170 notes with this tool, [blog address (Chinese)](https://blog.rxliuli.com/)

## FAQ

### What does token/port refer to and where can I find it?

You can usually see it in **Tools > Options > Web Clipper**

![joplin web clipper](https://img.rxliuli.com/20210316092547.png)

### Where is the joplin personal folder?

Generally speaking, if you are using a portable program, it should be in the program directory `. /JoplinProfile`
directory, where you should see the `resources,_templates,_tmp` directories.

![joplinProfilePath](https://img.rxliuli.com/20210316092834.png)
