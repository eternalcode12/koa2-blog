const articles = require('../models/article')
const users = require('../models/user')

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

module.exports = {
  userFindOne,
  userSelectAll,
  userLoginSelect
}