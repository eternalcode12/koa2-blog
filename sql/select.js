const user = require('../models/user')

const userSelect = (phone) => {
  let result = user.findAll({
    where: {
      phone
    }
  })

  return result
}

module.exports = {
  userSelect
}