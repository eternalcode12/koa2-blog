const user = require('../models/user')

const userInsert = (username, password, phone) => {
  user.create({
    username,
    password,
    phone
  })
}

module.exports = {
  userInsert
}