const koa = require('koa2')
const cors = require('koa2-cors')

const app = new koa()

// 配置跨域(所有的中间件都有顺序，跨域配置应该放在最上面)
app.use(cors())
app.use(async ctx => {
  ctx.body = {
    code: 200,
    msg: 'hello'
  }
})

app.listen(3000, () => {
  console.log("[demo]: server is running at localhost:3000.")
})