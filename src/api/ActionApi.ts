import axios from 'axios'
import { ApiUtil } from '../util/ApiUtil'

enum ActionEnum {
  OpenAndWatch = 'openAndWatch',
  StopWatching = 'stopWatching',
  NoteIsWatched = 'noteIsWatched',
}

class ActionApi {
  openAndWatch(noteId: string) {
    return ActionApi.baseAction(ActionEnum.OpenAndWatch, noteId)
  }

  stopWatching(noteId: string) {
    return ActionApi.baseAction(ActionEnum.StopWatching, noteId)
  }

  async noteIsWatched(noteId: string) {
    return ActionApi.baseAction(ActionEnum.NoteIsWatched, noteId)
  }

  private static async baseAction(action: ActionEnum, noteId: string) {
    return (
      await axios.post(ApiUtil.baseUrl('/services/externalEditWatcher'), {
        action,
        noteId,
      })
    ).data
  }
}

export const actionApi = new ActionApi()
