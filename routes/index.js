const router = require('koa-router')()

router.prefix('/api')

router
  .get('/', async ctx => {
    ctx.body = {
      code: 200,
      msg: 'home'
    }
  })

  .post('/register', async ctx => {
    ctx.body = {
      code: 200,
      msg: 'register',
      // 这里 ctx.request.body 可以解析页面传回的数据
      data: ctx.request.body
    }
  })

module.exports = router