import { Command } from 'commander'
import { blogCommander, BlogCommanderProgram } from './BlogCommander'
import { wikiCommander } from './WikiCommander'
import { i18n } from '../constants/i18n'
import { getLanguage } from '../util/getLanguage'
import en from '../i18n/en.json'
import zhCN from '../i18n/zhCN.json'
;(async () => {
  await i18n.init({ en, zhCN }, await getLanguage())

  new Command()
    .addCommand(blogCommander())
    .addCommand(wikiCommander())
    .description('joplin-blog')
    .action(() => new BlogCommanderProgram().main())
    .parse()
})()
