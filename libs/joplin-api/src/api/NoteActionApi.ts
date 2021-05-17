import { Ajax } from '../util/ajax'

enum ActionEnum {
  OpenAndWatch = 'openAndWatch',
  StopWatching = 'stopWatching',
  NoteIsWatched = 'noteIsWatched',
}

export class NoteActionApi {
  constructor(private ajax: Ajax) {}

  openAndWatch(noteId: string) {
    return this.baseAction(ActionEnum.OpenAndWatch, noteId)
  }

  stopWatching(noteId: string) {
    return this.baseAction(ActionEnum.StopWatching, noteId)
  }

  /**
   * @deprecated 已废弃，请使用 {@link isWatch}
   * @param noteId
   */
  async noteIsWatched(noteId: string) {
    return this.isWatch(noteId)
  }

  async isWatch(noteId: string) {
    return this.baseAction(ActionEnum.NoteIsWatched, noteId)
  }

  private async baseAction(action: ActionEnum, noteId: string) {
    return this.ajax.post('/services/externalEditWatcher', {
      action,
      noteId,
    })
  }
}
