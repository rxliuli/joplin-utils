import { Command } from 'commander'
import { blogCliCommand } from './BlogCommand'

new Command()
  .addCommand(
    new Command('blog')
      .description('根据 Joplin 中的笔记生成 blog 所需的文件')
      .action(blogCliCommand.gen.bind(blogCliCommand)),
  )
  .description('joplin-blog')
  .action(blogCliCommand.gen.bind(blogCliCommand))
  .parse()
