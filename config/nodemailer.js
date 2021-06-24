const nodemailer = require('nodemailer')
const {
  contactInsert
} = require('../sql/insert')

const config = {
  // 声明 163 邮箱
  host: 'smtp.163.com',
  secureConnection: true,
  // 端口好465， 不需要改
  port: 465,
  auth: {
    user: 'eternalcode@163.com',
    pass: 'CANVVNISKHQWIZVR'
  }
}

const sendMe = function (obj, ctx) {
  const mail = {
    // 发件人（要和你登录邮箱保持一致）
    from: obj.name + ' ' + '<' + config.auth.user + '>',
    // cc: 'eternalcoder@163.com',
    // 主题
    subject: obj.subject,
    // 收件人
    to: 'eternalcoder@163.com',
    // 内容
    text: obj.content
  }
  const transporter = nodemailer.createTransport(config)
  return new Promise((resolve, reject) => {
    transporter.sendMail(mail, (err, msg) => {
      if (err) {
        resolve(false)
      } else {
        contactInsert(obj.name, obj.email, obj.phone)
        resolve(true)
      }
    })
  })
}

module.exports = sendMe