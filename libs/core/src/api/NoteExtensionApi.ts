import { PromiseType } from 'utility-types'
import { noteApi, resourceApi, TypeEnum } from 'joplin-api'
import { ResourceProperties } from 'joplin-api/dist/modal/ResourceProperties'
import { NoteGetRes } from 'joplin-api/dist/modal/NoteGetRes'

class NoteExtensionApi {
  async safeExec<F extends (...args: any[]) => Promise<any>>(
    func: F,
    ...args: Parameters<F>
  ): Promise<PromiseType<ReturnType<F>> | Error> {
    try {
      return await func(...args)
    } catch (e) {
      return e
    }
  }

  async find(id: string) {
    const resourceRes = await this.safeExec(
      (id: string) => resourceApi.get(id, ['id', 'file_extension']),
      id,
    )
    if (!(resourceRes instanceof Error)) {
      return resourceRes as { type_: TypeEnum.Resource } & Pick<
        ResourceProperties,
        'id' | 'file_extension'
      >
    }
    const noteRes = await this.safeExec((id) => noteApi.get(id), id)
    if (!(noteRes instanceof Error)) {
      return noteRes as { type_: TypeEnum.Note } & NoteGetRes
    }
    throw new Error()
  }
}

export const noteExtensionApi = new NoteExtensionApi()
