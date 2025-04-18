import { diffBy } from '@liuli-util/array'
import { PageUtil, TagGetRes } from 'joplin-api'
import { JoplinTreeItem, JoplinListNote } from '../../provider/JoplinTreeItem'
import { JoplinNoteUtil } from '../../util/JoplinNoteUtil'
import * as vscode from 'vscode'
import { TagUseApi } from './utils/TagUseApi'
import { GlobalContext } from '../../constants/context'
import path from 'path'
import { t } from '../../constants/i18n'

export function tagCommands() {
  const tagUseService = new TagUseApi(
    path.resolve(GlobalContext.context.globalStorageUri.fsPath, 'joplin-vscode-plugin.sqlite'),
  )

  /**
   * 管理标签
   * 有两种模式
   * 1. 在笔记侧边栏
   * 2. 在笔记编辑器中
   * @param item
   */
  async function manageTags(item?: Omit<JoplinTreeItem, 'item'> & { item: JoplinListNote }) {
    const noteId = item?.id || JoplinNoteUtil.getNoteIdByFileName(vscode.window.activeTextEditor?.document.fileName)
    if (!noteId) {
      return
    }
    const oldSelectIdList = (await GlobalContext.api.note.tagsById(noteId)).map((tag) => tag.id)

    const lastUseTimeMap = await tagUseService.getMap()
    const selectTagSet = new Set(oldSelectIdList)
    const items = (await PageUtil.pageToAllList(GlobalContext.api.tag.list))
      .sort((a, b) => {
        const f = (it: typeof a) =>
          -(selectTagSet.has(it.id) ? Date.now() : lastUseTimeMap.get(it.id)?.lastUseTime ?? 0)
        return f(a) - f(b)
      })
      .map(
        (tag) =>
          ({
            label: tag.title,
            picked: selectTagSet.has(tag.id),
            tag,
          } as vscode.QuickPickItem & { tag: TagGetRes }),
      )

    const selectItems = await vscode.window.showQuickPick(items, {
      placeHolder: t('Please select a tag for this note'),
      canPickMany: true,
    })
    if (!selectItems) {
      return
    }
    const selectIdList = selectItems.map((item) => item.tag.id)
    const { left: addIdList } = diffBy(selectIdList, oldSelectIdList)
    const { left: deleteIdList } = diffBy(oldSelectIdList, selectIdList)
    console.log('选择项: ', selectItems, addIdList, deleteIdList)
    await Promise.all(addIdList.map((id) => GlobalContext.api.tag.addTagByNoteId(id, noteId)))
    await Promise.all(deleteIdList.map((id) => GlobalContext.api.tag.removeTagByNoteId(id, noteId)))
    await tagUseService.save(selectItems.map((item) => item.tag))
  }

  async function createTag() {
    const title = await vscode.window.showInputBox({
      placeHolder: t('Please enter the name of the new tag'),
    })
    if (!title) {
      return
    }
    await GlobalContext.api.tag.create({
      title,
    })
    vscode.window.showInformationMessage(
      t('Create tag [{{title}}] success', {
        title,
      }),
    )
  }

  async function removeTag() {
    const items = (await PageUtil.pageToAllList(GlobalContext.api.tag.list)).map(
      (tag) =>
        ({
          label: tag.title,
          tag,
        } as vscode.QuickPickItem & { tag: TagGetRes }),
    )
    const selectItem = await vscode.window.showQuickPick(items, {
      placeHolder: t('Please select the tag to delete'),
    })
    if (!selectItem) {
      return
    }
    await GlobalContext.api.tag.remove(selectItem.tag.id)
    vscode.window.showInformationMessage(
      t('Remove tag [{{title}}] success', {
        title: selectItem.tag.title,
      }),
    )
  }

  return {
    manageTags,
    createTag,
    removeTag,
  }
}
