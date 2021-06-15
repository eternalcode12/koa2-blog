const router = require('koa-router')()
const users = require('../models/user')

router.prefix('/api')

router
  .get('/', async ctx => {
    ctx.body = {
      code: 200,
      msg: 'home'
    }
  })

  .post('/register', async ctx => {
    // 在这里开始写注册内容
    console.log(ctx.request.body)
    let {
      username,
      password
    } = ctx.request.body
    // 这里对于业务的一个判断执行对应的一个操作
    if (username !== '' && password !== '') {
      users.create({
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