const router = require('koa-router')()
// 引入对应的控制器
const user = require('../controller/user')
const email = require('../controller/email')

router.prefix('/api')

// 用户
router
  .get('/user/findAllUser', user.apiGetUsers)

  .post('/user/register', user.apiRegister)

  .put('/user/update', user.apiUpdateUserInfo)

  .delete('/user/delete', user.apiDeleteUser)

  .post('/user/login', user.apiUserLogin)

  // 发送邮件
  .post('/email/sendMsg', email.apiSendEmail)
  // 订阅
  .post('/email/subscribe', email.apiSubscribe)

module.exports = router