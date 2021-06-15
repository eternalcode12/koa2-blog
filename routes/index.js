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
      msg: 'register'
    }
  })

module.exports = router