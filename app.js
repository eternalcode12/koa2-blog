const koa = require('koa2')
const cors = require('koa2-cors')
const router = require('./routes/index')
const bodyparser = require('koa-bodyparser')

const app = new koa()

// 配置跨域(所有的中间件都有顺序，跨域配置应该放在最上面)
app.use(cors())
// bodyparser 中间件为了解析页面传回的数据
app.use(bodyparser())
app.use(require('koa-static')(__dirname + '/public/dist'))
app.use(router.routes(), router.allowedMethods())

app.listen(3000, () => {
  console.log("[demo]: server is running at http://localhost:3000.")
})