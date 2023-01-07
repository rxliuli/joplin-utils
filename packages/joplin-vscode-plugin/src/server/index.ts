import cors from '@koa/cors'
import Router from '@koa/router'
import Application from 'koa'

async function main() {
  const app = new Application()
  const router = new Router()
  router.get('/ping', (ctx) => {
    ctx.body = 'pong'
  })
  const map = new Map<string, any>()
  router.get('/get', (ctx) => {
    const key = ctx.request.query.key
    if (typeof key !== 'string') {
      throw new Error('提供的 key 不是 string 类型')
    }
    return map.get(key)
  })
  router.post('/set', (ctx) => {
    const json = ctx.request.toJSON() as { key: string; value: any }
    ctx.set(json.key, json.value)
  })
  router.del('/delete', (ctx) => {
    const json = ctx.request.toJSON() as { key: string }
    map.delete(json.key)
  })
  router.get('/keys', (_ctx) => {
    return [...map.keys()]
  })
  app.use(cors()).use(router.routes())
  app.listen(8080)
  console.log('server: http://localhost:8080/')
}

main()
