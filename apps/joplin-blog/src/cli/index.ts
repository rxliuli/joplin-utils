import { Command } from 'commander'
import { blogCommander, blogCommanderProgram } from './BlogCommander'
import { i18n } from '../util/I18n'
;(async () => {
  await i18n.load(await i18n.getLanguage())

  new Command()
    .addCommand(blogCommander())
    .description('joplin-blog')
    .action(blogCommanderProgram.main.bind(blogCommanderProgram))
    .parse()
})()
