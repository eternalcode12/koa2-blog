const koa = require('koa2')
const cors = require('koa2-cors')
const router = require('./routes/index')
const bodyparser = require('koa-bodyparser')
const {
  koaSwagger
} = require('koa2-swagger-ui')
const swagger = require('./utils/swagger')
const koaBady = require('koa-body')
const path = require('path')
const koaStatic = require('koa-static')
const app = new koa()

// 配置跨域(所有的中间件都有顺序，跨域配置应该放在最上面)
app.use(cors())
// bodyparser 中间件为了解析页面传回的数据
app.use(bodyparser())
app.use(koaBady({
  multipart: true
}));
app.use(koaSwagger({
  routePrefix: '/swagger', // host at /swagger instead of default /docs
  swaggerOptions: {
    url: '/swagger.json', // example path to json 其实就是之后swagger-jsdoc生成的文档地址
  },
}))
app.use(swagger.routes(), swagger.allowedMethods())
app.use(router.routes(), router.allowedMethods())


app.listen(3000, () => {
  console.log("[demo]: server is running at http://localhost:3000.")
})