const router = require('koa-router')()
const user = require('../models/user')

router.prefix('/api')

router
  .get('/', async ctx => {
    ctx.body = {
      code: 200,
      msg: 'home'
    }
  })

  .post('/register', async ctx => {
    let {
      username,
      password
    } = ctx.request.body
    if (username !== '' && password !== '') {
      user.create({
        username,
        password
      })
      ctx.body = {
        code: 200,
        msg: 'success',
        // 这里 ctx.request.body 可以解析页面传回的数据
        // data: ctx.request.body
      }
    } else {
      ctx.body = {
        code: 400,
        msg: 'fail'
      }
    }
  })

module.exports = router