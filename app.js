const koa = require('koa2')
const cors = require('koa2-cors')

const app = new koa()

app.use(async ctx => {
  ctx.body = {
    code: 200,
    msg: 'hello'
  }
})

app.listen(3000, () => {
  console.log("[demo]: server is running at localhost:3000.")
})