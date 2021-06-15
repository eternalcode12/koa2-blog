const user = require('../models/user')

const userFindOne = (phone) => {
  let result = user.findOne({
    where: {
      phone
    }
  })

  return result
}

const userSelectAll = () => {
  let result = user.findAll()

  return result
}

module.exports = {
  userFindOne,
  userSelectAll
}