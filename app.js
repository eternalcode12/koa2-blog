const koa = require('koa2')
const cors = require('koa2-cors')
const router = require('koa-router')()

const app = new koa()

// 配置跨域(所有的中间件都有顺序，跨域配置应该放在最上面)
app.use(cors())
app.use(router.routes(), router.allowedMethods())

router.get("/", async ctx => {
  ctx.body = {
    code: 200,
    msg: 'hello world'
  }
})

app.listen(3000, () => {
  console.log("[demo]: server is running at http://localhost:3000.")
})