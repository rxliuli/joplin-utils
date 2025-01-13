import { Ajax } from '../util/ajax'

export enum NoteActionEnum {
  OpenAndWatch = 'openAndWatch',
  StopWatching = 'stopWatching',
  NoteIsWatched = 'noteIsWatched',
}

export class NoteActionApi {
  constructor(private ajax: Ajax) {}

  openAndWatch(noteId: string): Promise<void> {
    return this.baseAction(NoteActionEnum.OpenAndWatch, noteId)
  }

  stopWatching(noteId: string): Promise<void> {
    return this.baseAction(NoteActionEnum.StopWatching, noteId)
  }

  /**
   * @deprecated Deprecated, please use {@link isWatch}
   * @param noteId
   */
  async noteIsWatched(noteId: string): Promise<boolean> {
    return this.isWatch(noteId)
  }

  async isWatch(noteId: string): Promise<boolean> {
    return this.baseAction(NoteActionEnum.NoteIsWatched, noteId)
  }

  private async baseAction(action: NoteActionEnum, noteId: string): Promise<any> {
    return this.ajax.post<any>('/services/externalEditWatcher', {
      action,
      noteId,
    })
  }
}
