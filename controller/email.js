const {
  allCode,
  msg
} = require('../config/code')
const {
  Result,
  ResultData
} = require('../config/result')
const sendMe = require('../config/nodemailer')
const {
  searchSubscribeEmail
} = require('../sql/select')

// 联系我
const apiSendEmail = async ctx => {
  if (await sendMe(ctx.request.body, ctx)) {
    ctx.body = new Result('success', allCode.SUCCESS, new ResultData())
  } else {
    ctx.body = {
      code: 544,
      msg: 'fail'
    }
    ctx.body = new Result('fail', allCode.FAIL)
  }
}

// 订阅
const apiSubscribe = async ctx => {
  let {
    email
  } = ctx.request.body
  if (await searchSubscribeEmail(email)) {
    ctx.body = new Result('success', allCode.SUCCESS, new ResultData())
  } else {
    ctx.body = new Result('fail', allCode.FAIL)
  }
}

module.exports = {
  apiSendEmail,
  apiSubscribe
}