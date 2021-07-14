import joplin from '@thejohnfreeman/joplin-plugin'
import { FileSystemItem } from '@thejohnfreeman/joplin-plugin/types'
import { copy, mkdirp, writeFile } from 'fs-extra'
import * as path from 'path'

function destDir(context: any) {
  return context.destPath
}

function resourceDir(context: any) {
  return context.destPath + '/resources'
}

joplin.plugins.register({
  onStart: async function () {
    await joplin.interop.registerExportModule({
      description: 'Zip Export Directory',
      format: 'zip',
      target: FileSystemItem.Directory,
      isNoteArchive: true,

      onInit: async (context: any) => {
        await mkdirp(destDir(context))
        await mkdirp(resourceDir(context))
      },

      onProcessItem: async (context: any, _itemType: number, item: any) => {
        const filePath = destDir(context) + '/' + item.id + '.json'
        const serialized = JSON.stringify(item)
        await writeFile(filePath, serialized, 'utf8')
      },

      onProcessResource: async (
        context: any,
        _resource: any,
        filePath: string,
      ) => {
        const destPath = resourceDir(context) + '/' + path.basename(filePath)
        await copy(filePath, destPath)
      },

      onClose: async (_context: any) => {},
    })

    await joplin.interop.registerImportModule({
      description: 'Zip Import Directory',
      format: 'zip',
      sources: [FileSystemItem.Directory],
      isNoteArchive: true,

      onExec: async (context: any) => {
        // In this case importing is a lot more complicated due to the need to avoid
        // duplicate IDs, to validate data and ensure note links and
        // resources are still working properly.
        // See InteropService_Importer_Raw for an example.
        console.info('Not implemented! Importing from:', context)
      },
    })
  },
})
