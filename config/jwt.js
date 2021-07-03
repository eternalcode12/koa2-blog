// 添加 jwt 包
const jwt = require('jsonwebtoken')
const user = {
  iss: 'eternalcoder',
  user: 'eternalcoder'
}

const sendToken = () => {
  return new Promise((resolve, reject) => {
    jwt.sign(user, 'secretkey', {
      expiresIn: '12h'
    }, (err, token) => {
      if (err) reject(err)
      resolve(token)
    })
  })
}

module.exports = {
  sendToken
}