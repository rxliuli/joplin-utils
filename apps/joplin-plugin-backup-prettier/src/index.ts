import joplin, {
  FileSystemItem,
  ImportContext,
  SettingItemType,
} from 'joplin-plugin-api'
import { ExportContext } from 'joplin-plugin-api/dist/api/types'
import { Exporter } from './core/Exporter'
import { config } from 'joplin-api'
import { Importer } from './core/Importer'
import path from 'path'
import { pathExists } from 'fs-extra'

joplin.plugins.register({
  onStart: async function () {
    await joplin.settings.registerSettings({
      token: {
        label: 'token',
        description: 'token',
        type: SettingItemType.String,
        public: true,
        value: '',
      },
      port: {
        label: 'port',
        description: 'port',
        type: SettingItemType.Int,
        public: true,
        value: 41184,
      },
    })

    async function setupJoplinConfig() {
      const token = await joplin.settings.value('token')
      const port = await joplin.settings.value('port')
      if (!token || !port) {
        return false
      }
      config.token = token
      config.port = port
      return true
    }
    await joplin.interop.registerExportModule({
      description: 'Export Directory',
      format: 'folder',
      target: FileSystemItem.Directory,
      isNoteArchive: true,

      async onInit(context: ExportContext) {
        if (!(await setupJoplinConfig())) {
          return
        }
        const exporter = new Exporter({
          rootPath: context.destPath,
        })
        await exporter.export()
      },
      async onProcessItem() {},
      async onProcessResource() {},
      async onClose(_context: any) {},
    })
    await joplin.interop.registerImportModule({
      description: 'Import Directory',
      format: 'folder',
      sources: [FileSystemItem.Directory],
      isNoteArchive: false,

      async onExec(context: ImportContext) {
        if (!(await setupJoplinConfig())) {
          console.warn('插件配置错误')
          return
        }
        if (!(await pathExists(path.resolve(context.sourcePath, 'config')))) {
          console.warn('导入目录不正确')
          return
        }
        const importer = new Importer({
          rootPath: context.sourcePath,
        })
        await importer.importArchive()
      },
    })
  },
})
