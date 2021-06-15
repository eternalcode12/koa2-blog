const router = require('koa-router')()
// 引入对应的控制器
const user = require('../controller/user')
// const user = require('../models/user')

router.prefix('/api')

router
  .get('/', async ctx => {
    ctx.body = {
      code: 200,
      msg: 'home'
    }
  })

  .post('/user/register', user.apiRegister)

module.exports = router