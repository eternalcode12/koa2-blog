const user = require('../models/user')
const contacts = require('../models/contact')
const subscribes = require('../models/subscribes')

// 新增用户
const userInsert = (username, password, phone) => {
  user.findOrCreate({
    where: {
      phone
    },
    defaults: {
      username,
      password,
      phone
    }
  })
}

// 联系方式插入
const contactInsert = (name, email, phone) => {
  contacts.create({
    name,
    email,
    phone
  })
}

// const subscribeEmailInsert = (email) => {
//   subscribes.create({
//     email,
//   })
// }

module.exports = {
  userInsert,
  contactInsert,
  // subscribeEmailInsert
}