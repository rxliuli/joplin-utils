import { Command } from 'commander'
import { blogCommander, BlogCommanderProgram } from './BlogCommander'
import { i18n } from '../util/I18n'
import { blogInitCommander } from './BlogInitCommander'
;(async () => {
  await i18n.load(await i18n.getLanguage())

  new Command()
    .addCommand(blogCommander())
    .addCommand(blogInitCommander())
    .description('joplin-blog')
    .action(() => new BlogCommanderProgram().main())
    .parse()
})()
