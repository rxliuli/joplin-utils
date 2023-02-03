import { Ajax } from '../util/ajax'

export enum ResourceActionEnum {
  OpenAndWatch = 'openAndWatch',
  Watch = 'watch',
  StopWatching = 'stopWatching',
  NoteIsWatched = 'isWatched',
}

export class ResourceActionApi {
  constructor(private ajax: Ajax) {}

  openAndWatch(resourceId: string): Promise<void> {
    return this.baseAction(ResourceActionEnum.OpenAndWatch, resourceId)
  }

  watch(resourceId: string): Promise<void> {
    return this.baseAction(ResourceActionEnum.Watch, resourceId)
  }

  stopWatching(resourceId: string): Promise<void> {
    return this.baseAction(ResourceActionEnum.StopWatching, resourceId)
  }

  async noteIsWatched(resourceId: string): Promise<boolean> {
    return this.baseAction(ResourceActionEnum.NoteIsWatched, resourceId)
  }

  private async baseAction(action: ResourceActionEnum, resourceId: string) {
    return this.ajax.post<any>('/services/resourceEditWatcher', {
      action,
      resourceId,
    })
  }
}
