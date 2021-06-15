const router = require('koa-router')()
// 引入对应的控制器
const user = require('../controller/user')

router.prefix('/api')

router
  .post('/user/register', user.apiRegister)

  .put('/user/update', user.apiUpdateUserInfo)

module.exports = router