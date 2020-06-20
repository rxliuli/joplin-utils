import { actionApi } from '../../'

describe('test ActionApi', () => {
  it('test ActionApi.openAndWatch', async () => {
    const res = await actionApi.openAndWatch('1cb6c6ff2bc04170a5ed66269f3cf88b')
    console.log(res)
  })

  it('test ActionApi.stopWatching', async () => {
    const res = await actionApi.stopWatching('1cb6c6ff2bc04170a5ed66269f3cf88b')
    console.log(res)
  })

  it('test ActionApi.noteIsWatched', async () => {
    const res = await actionApi.noteIsWatched(
      '1cb6c6ff2bc04170a5ed66269f3cf88b',
    )
    console.log(res)
  })
})
