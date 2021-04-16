import { Command } from 'commander'
import { blogCliCommand } from './BlogCommand'
import { i18n } from '../util/I18n'
;(async () => {
  await i18n.load(await i18n.getLanguage())
  new Command()
    .addCommand(
      new Command('blog')
        .description(
          i18n.t(
            'blog.Generate the files needed for the blog based on the notes in Joplin',
          ),
        )
        .action(blogCliCommand.gen.bind(blogCliCommand)),
    )
    .description('joplin-blog')
    .action(blogCliCommand.gen.bind(blogCliCommand))
    .parse()
})()
