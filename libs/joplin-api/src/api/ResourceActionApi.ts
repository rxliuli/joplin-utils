import { Ajax } from '../util/ajax'

enum ActionEnum {
  OpenAndWatch = 'openAndWatch',
  Watch = 'watch',
  StopWatching = 'stopWatching',
  NoteIsWatched = 'isWatched',
}

export class ResourceActionApi {
  constructor(private ajax: Ajax) {}

  openAndWatch(resourceId: string) {
    return this.baseAction(ActionEnum.OpenAndWatch, resourceId)
  }

  watch(resourceId: string) {
    return this.baseAction(ActionEnum.Watch, resourceId)
  }

  stopWatching(resourceId: string) {
    return this.baseAction(ActionEnum.StopWatching, resourceId)
  }

  async noteIsWatched(resourceId: string) {
    return this.baseAction(ActionEnum.NoteIsWatched, resourceId)
  }

  private async baseAction(action: ActionEnum, resourceId: string) {
    return this.ajax.post('/services/resourceEditWatcher', {
      action,
      resourceId,
    })
  }
}
