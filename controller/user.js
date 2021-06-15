const user = require('../models/user')
const {
  allCode,
  msg
} = require('../config/code')
const Result = require('../config/result')
const {
  userInsert
} = require('../sql/insert')
const {
  userSelect
} = require('../sql/select')

const apiRegister = async ctx => {
  let {
    username,
    password,
    phone
  } = ctx.request.body
  if (username && password && phone) {
    if (await userSelect(phone).length === 0) {
      userInsert(username, password, phone)
      ctx.body = new Result(msg.SUCCESS)
    } else {
      ctx.body = new Result("用户已存在", allCode.FAIL)
    }
  } else {
    ctx.body = new Result(msg.FAIL, allCode.FAIL)
  }
}

module.exports = {
  apiRegister
}