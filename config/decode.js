// 解密
const bcrypt = require('bcrypt')
const saltRounds = 10;

const decodePasswd = (password, hash) => {
  const flag = bcrypt.compareSync(password, hash)

  return flag
}

module.exports = {
  decodePasswd
}