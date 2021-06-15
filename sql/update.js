const user = require('../models/user')

const userUpdate = (username, password, phone) => {
  user.update({
    username,
    password,
    phone
  }, {
    where: {
      phone
    }
  })
}

module.exports = {
  userUpdate
}