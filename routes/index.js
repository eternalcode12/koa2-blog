const router = require('koa-router')()
// 引入对应的控制器
const user = require('../controller/user')
const email = require('../controller/email')

router.prefix('/api')

// 用户
/**
 * @swagger
 * /user/findAllUser: # 接口地址
 *  get: # 请求体
 *    description: 获取所有用户信息 # 接口信息
 *    tags: [用户模块] # 模块名称
 *    produces:
 *      - application/x-www-form-urlencoded  # 响应内容类型
 *    parameters: # 请求参数
 *    responses:
 *      '200': 
 *        description: Ok
 *      '546':
 *        description: Fail
 *      schema: # 返回体说明
 *        type: 'object'
 *        properties:
 *          code:
 *             type: 'number'
 *          data:
 *            type: 'object'
 *          message:
 *            type: 'string'
 *            description: 消息提示 
 */
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