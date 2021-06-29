const articles = require('../models/article')
const users = require('../models/user')
const subscribes = require('../models/subscribes')
const blogs = require('../models/blog')

// 查找用户
const userFindOne = (username) => {
  let result = users.findOne({
    where: {
      username
    },
    // include: [articles]
  })

  return result
}

const userSelectAll = () => {
  let result = users.findAll()

  return result
}

const userLoginSelect = (username) => {
  let result = users.findOne({
    where: {
      username
    }
  })

  return result
}

// 查找订阅邮箱是否又重复的
const searchSubscribeEmail = async (email) => {
  let [result, created] = await subscribes.findOrCreate({
    where: {
      email
    },
    defaults: {
      email
    }
  })
  return created
}

// 获取 blog 信息
const getBlogContent = async (username) => {
  let result = blogs.findAll({
    where: {
      username
    },
    limit: 4
  })

  return result
}

module.exports = {
  userFindOne,
  userSelectAll,
  userLoginSelect,
  searchSubscribeEmail,
  getBlogContent
}
