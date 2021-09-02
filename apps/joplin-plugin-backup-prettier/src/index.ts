import joplin, {
  ExportModule,
  FileSystemItem,
  SettingItemType,
} from 'joplin-plugin-api'
import { ExportContext } from 'joplin-plugin-api/dist/api/types'
import { Exporter } from './core/Exporter'
import { config } from 'joplin-api'

class DirExporter implements ExportModule {
  description = 'Export Directory'
  format = 'folder'
  target = FileSystemItem.Directory
  isNoteArchive = true

  async onInit(context: ExportContext) {
    config.token = await joplin.settings.value('token')
    config.port = await joplin.settings.value('port')
    if (!config.token || !config.port) {
      const dialogs = joplin.views.dialogs
      const handle = await dialogs.create('error config')
      await dialogs.setHtml(handle, 'No configuration token/port')
      await dialogs.open(handle)
      return
    }
    const exporter = new Exporter({
      rootPath: context.destPath,
    })
    await exporter.export()
  }

  async onProcessItem(context: any, _itemType: number, item: any) {}

  async onProcessResource(context: any, _resource: any, filePath: string) {}

  async onClose(_context: any) {}
}

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
    await joplin.interop.registerExportModule(new DirExporter())
  },
})
