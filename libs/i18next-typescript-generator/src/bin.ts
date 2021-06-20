import { Command } from 'commander'
import { GeneratorCommandProgram } from './service/GeneratorCommand'
import { i18n } from './util/I18n'
;(async () => {
  await i18n.load(await i18n.getLanguage())
  await new Command()
    .option('-i, --input <input...>', i18n.t('cli.option.input'))
    .option('-w, --watch', i18n.t('cli.option.watch'))
    .description(i18n.t('cli.description'))
    .action(async (options: { input: string[]; watch: boolean }) => {
      await new GeneratorCommandProgram().main({
        dirs: options.input,
        watch: options.watch,
      })
    })
    .parseAsync()
})()
