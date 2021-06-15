const user = require('../models/user')
const {
  allCode,
  msg
} = require('../config/code')
const Result = require('../config/result')

const apiRegister = async ctx => {
  let {
    username,
    password
  } = ctx.request.body
  if (username && password) {
    user.create({
      username,
      password
    })
    ctx.body = new Result(msg.SUCCESS)
  } else {
    ctx.body = new Result(msg.FAIL, allCode.FAIL)
  }
}

module.exports = {
  apiRegister
}