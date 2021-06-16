const articles = require('../models/article')
const users = require('../models/user')

const userFindOne = (phone) => {
  let result = users.findOne({
    where: {
      phone
    },
    // include: [articles]
  })

  return result
}

const userSelectAll = () => {
  let result = users.findAll()

  return result
}

module.exports = {
  userFindOne,
  userSelectAll
}