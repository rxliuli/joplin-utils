import { FolderOrNote } from '../model/FolderOrNote'
import * as vscode from 'vscode'
import { config, folderApi, TypeEnum } from 'joplin-api'
import { NoteListProvider } from '../model/NoteProvider'
import { NoteGetRes } from 'joplin-api/dist/modal/NoteGetRes'
import { FolderOrNoteExtendsApi } from '../api/FolderOrNoteExtendsApi'
import { appConfig, AppConfig } from '../config/AppConfig'
import { resolve } from 'path'
import { existsSync } from 'fs'
import { vscodeMarkdownFileApi } from '../api/VSCodeMarkdownFileApi'

export class JoplinNoteCommandService {
  private folderOrNoteExtendsApi = new FolderOrNoteExtendsApi()
  constructor(private joplinNoteView: NoteListProvider) {}
  init(appConfig: AppConfig) {
    config.token = appConfig.token
  }

  /**
   * create folder or note
   * @param item
   * @param type
   */
  async create(item: FolderOrNote, type: TypeEnum) {
    console.log('joplinNote.create: ', item)
    if (!item) {
      const title = await vscode.window.showInputBox({
        placeHolder: '请输入笔记目录名',
      })
      if (!title) {
        return
      }
      const folder = {
        title,
        parent_id: '',
      }
      await folderApi.create(folder)
      await this.joplinNoteView.refresh()
      return
    }
    const title = await vscode.window.showInputBox({
      placeHolder: `请输入要创建的${
        type === TypeEnum.Folder ? '目录' : '笔记'
      }名`,
    })
    if (item.item.type_ !== TypeEnum.Folder) {
      return
    }
    if (!title) {
      return
    }
    console.log('create: ', item, type)
    await this.folderOrNoteExtendsApi.create({
      title,
      parent_id: item.item.id,
      type_: type,
    })
    await this.joplinNoteView.refresh()
  }

  /**
   * remove folder or note
   * @param item
   */
  async remove(item: FolderOrNote) {
    const folderOrNote = item.item
    const res = await vscode.window.showQuickPick(['确认', '取消'], {
      placeHolder: `是否删除${
        folderOrNote.type_ === TypeEnum.Folder
          ? '目录'
          : (folderOrNote as NoteGetRes).is_todo
          ? '待办事项'
          : '笔记'
      } [${folderOrNote.title}]`,
    })
    console.log(res)
    if (res !== '确认') {
      return
    }
    await this.folderOrNoteExtendsApi.remove(item.item)
    await this.joplinNoteView.refresh()
  }

  /**
   * open note in vscode
   * @param item
   */
  async openNote(item: Omit<FolderOrNote, 'item'> & { item: NoteGetRes }) {
    if (!appConfig.programPath) {
      vscode.window.showInformationMessage('请先配置 joplin 的安装目录')
      return
    }
    const notePath = resolve(
      appConfig.programPath,
      'JoplinProfile',
      `edit-${item.item.id}.md`,
    )
    if (!existsSync(notePath)) {
      vscode.window.showErrorMessage(
        '请先在 Joplin 中使用在外部编辑器打开该文件',
      )
      return
    }
    await vscodeMarkdownFileApi.open(notePath)
  }
}
