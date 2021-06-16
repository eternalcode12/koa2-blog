// 加密
const bcrypt = require('bcrypt')
const saltRounds = 10;

const bcryptPasswd = (password) => {
  const salt = bcrypt.genSaltSync(saltRounds)
  const hash = bcrypt.hashSync(password, salt)

  return hash
}

module.exports = {
  bcryptPasswd
}