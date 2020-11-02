import { ajax } from '../util/ajax'

enum ActionEnum {
  OpenAndWatch = 'openAndWatch',
  StopWatching = 'stopWatching',
  NoteIsWatched = 'noteIsWatched',
}

class NoteActionApi {
  openAndWatch(noteId: string) {
    return NoteActionApi.baseAction(ActionEnum.OpenAndWatch, noteId)
  }

  stopWatching(noteId: string) {
    return NoteActionApi.baseAction(ActionEnum.StopWatching, noteId)
  }

  async noteIsWatched(noteId: string) {
    return NoteActionApi.baseAction(ActionEnum.NoteIsWatched, noteId)
  }

  private static async baseAction(action: ActionEnum, noteId: string) {
    return ajax.post('/services/externalEditWatcher', {
      action,
      noteId,
    })
  }
}

/**
 * @deprecated 已废弃，请使用 {@link noteActionApi}
 */
export const actionApi = new NoteActionApi()
export const noteActionApi = new NoteActionApi()
