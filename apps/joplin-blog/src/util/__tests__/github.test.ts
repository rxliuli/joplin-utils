import { Octokit } from '@octokit/rest'

describe('测试 github rest api', () => {
  it('基本使用', async () => {
    const octokit = new Octokit()
    try {
      const data = await octokit.rest.repos.get({
        type: 'public',
        owner: 'rxliuli',
        repo: 'rxliuli2.github.io',
      })
      console.log('data: ', data.url)
    } catch (e) {
      console.error('error: ', e)
    }
  })
})
