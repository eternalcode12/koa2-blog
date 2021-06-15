const user = require('../models/user')

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

module.exports = {
  userInsert
}