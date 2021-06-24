const {
  allCode,
  msg
} = require('../config/code')
const {
  Result,
  ResultData
} = require('../config/result')
const {
  userInsert
} = require('../sql/insert')
const {
  userFindOne,
  userSelectAll,
  userLoginSelect
} = require('../sql/select')
const {
  userUpdate
} = require('../sql/update')
const {
  userDelete
} = require('../sql/delete')
const {
  bcryptPasswd
} = require('../config/encrypt')
const {
  decodePasswd
} = require('../config/decode')
const {
  sendToken
} = require('../config/jwt')

const apiGetUsers = async ctx => {
  ctx.body = new Result("操作成功", allCode.SUCCESS, await userSelectAll())
}

const apiRegister = async ctx => {
  let {
    username,
    password,
    phone
  } = ctx.request.body
  if (username && password && phone) {
    let result = await userFindOne(username)
    if (result === null) {
      userInsert(username, bcryptPasswd(password), phone)
      ctx.body = new Result(msg.SUCCESS)
    } else {
      ctx.body = new Result("用户已存在", allCode.FAIL)
    }
  } else {
    ctx.body = new Result(msg.FAIL, allCode.FAIL)
  }
}

const apiUpdateUserInfo = async ctx => {
  let {
    username,
    password,
    phone
  } = ctx.request.body
  if (username) {
    if (await userFindOne(username) !== null) {
      userUpdate(username, password, phone)
      ctx.body = new Result("信息更新成功")
    } else {
      ctx.body = new Result("未查询到该用户", allCode.FAIL)
    }
  } else {
    ctx.body = new Result("用户名不能为空!", allCode.FAIL)
  }
}

const apiDeleteUser = async ctx => {
  let {
    phone
  } = ctx.request.body

  if (username) {
    if (await userFindOne(username) !== null) {
      userDelete(phone)
      ctx.body = new Result("用户删除完成")
    } else {
      ctx.body = new Result("未查询到该用户", allCode.FAIL)
    }
  } else {
    ctx.body = new Result("用户名不能为空!", allCode.FAIL)
  }
}

const apiUserLogin = async ctx => {
  let {
    username,
    password
  } = ctx.request.body
  let result = await userLoginSelect(username)
  if (result !== null) {
    let flag = decodePasswd(password, result.password)
    if (flag) {
      ctx.body = new Result("操作成功", allCode.SUCCESS, new ResultData('bearer ' + await sendToken(), await userSelectAll()))
    } else {
      ctx.response.code = 407
      ctx.body = new Result("用户名或密码错误", allCode.FAIL)
    }
  } else {
    ctx.body = new Result("该用户未注册", allCode.FAIL)
  }
}

module.exports = {
  apiRegister,
  apiUpdateUserInfo,
  apiDeleteUser,
  apiGetUsers,
  apiUserLogin
}