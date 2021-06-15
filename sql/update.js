const user = require('../models/user')
const moment = require('moment')

const userUpdate = (username, password, phone) => {
  user.update({
    username,
    password,
    phone,
    // 这里在更新特殊字段时，必须加上引号
    "updatedAt": moment().format("YYYY-MM-DD HH:mm:ss")
  }, {
    where: {
      phone
    }
  })
}

module.exports = {
  userUpdate
}