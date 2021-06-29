const user = require('../models/user')
const contacts = require('../models/contact')
const subscribes = require('../models/subscribes')
const blogs = require('../models/blog')

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

// 插入博客内容
const blogInsert = (imgUrl, createTime, username, count, title, content) => {
  blogs.create({
    imgUrl,
    createTime,
    username,
    count,
    title,
    content
  })
}

module.exports = {
  userInsert,
  contactInsert,
  blogInsert
}
