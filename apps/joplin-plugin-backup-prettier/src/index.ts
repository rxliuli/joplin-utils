import joplin, {
  ExportModule,
  FileSystemItem,
  ImportModule,
} from 'joplin-plugin-api'
import { copy, mkdirp, writeFile } from 'fs-extra'
import * as path from 'path'

function destDir(context: any) {
  return context.destPath
}

function resourceDir(context: any) {
  return context.destPath + '/resources'
}

class DirExporter implements ExportModule {
  description = 'Zip Export Directory'
  format = 'zip'
  target = FileSystemItem.Directory
  isNoteArchive = true

  async onInit(context: any) {
    await mkdirp(destDir(context))
    await mkdirp(resourceDir(context))
  }

  async onProcessItem(context: any, _itemType: number, item: any) {
    const filePath = destDir(context) + '/' + item.id + '.json'
    const serialized = JSON.stringify(item)
    await writeFile(filePath, serialized, 'utf8')
  }

  async onProcessResource(context: any, _resource: any, filePath: string) {
    const destPath = resourceDir(context) + '/' + path.basename(filePath)
    await copy(filePath, destPath)
  }

  async onClose(_context: any) {}
}

class DirImporter implements ImportModule {
  description = 'Zip Import Directory'
  format = 'zip'
  sources = [FileSystemItem.Directory]
  isNoteArchive = true

  async onExec(context: any) {
    // In this case importing is a lot more complicated due to the need to avoid
    // duplicate IDs, to validate data and ensure note links and
    // resources are still working properly.
    // See InteropService_Importer_Raw for an example.
    console.info('Not implemented! Importing from:', context)
  }
}

joplin.plugins.register({
  onStart: async function () {
    await joplin.interop.registerExportModule(new DirExporter())
    await joplin.interop.registerImportModule(new DirImporter())
  },
})
