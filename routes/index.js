const router = require('koa-router')()
// 引入对应的控制器
const user = require('../controller/user')

router.prefix('/api')

router
  .get('/user/findAllUser', user.apiGetUsers)

  .post('/user/register', user.apiRegister)

  .put('/user/update', user.apiUpdateUserInfo)

  .delete('/user/delete', user.apiDeleteUser)

  .post('/user/login', user.apiUserLogin)

module.exports = router