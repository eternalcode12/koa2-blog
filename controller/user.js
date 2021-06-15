const {
  allCode,
  msg
} = require('../config/code')
const Result = require('../config/result')
const {
  userInsert
} = require('../sql/insert')
const {
  userSelect,
  userSelectAll
} = require('../sql/select')
const {
  userUpdate
} = require('../sql/update')
const {
  userDelete
} = require('../sql/delete')

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
    let result = await userSelect(phone)
    if (result.length === 0) {
      userInsert(username, password, phone)
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
  if (phone) {
    if (await userSelect(phone).length !== 0) {
      userUpdate(username, password, phone)
      ctx.body = new Result("信息更新成功")
    } else {
      ctx.body = new Result("未查询到该用户", allCode.FAIL)
    }
  } else {
    ctx.body = new Result("手机号不能为空!", allCode.FAIL)
  }
}

const apiDeleteUser = async ctx => {
  let {
    phone
  } = ctx.request.body

  if (phone) {
    if (await userSelect(phone).length !== 0) {
      userDelete(phone)
      ctx.body = new Result("用户删除完成")
    } else {
      ctx.body = new Result("未查询到该用户", allCode.FAIL)
    }
  } else {
    ctx.body = new Result("手机号不能为空!", allCode.FAIL)
  }
}

module.exports = {
  apiRegister,
  apiUpdateUserInfo,
  apiDeleteUser,
  apiGetUsers
}