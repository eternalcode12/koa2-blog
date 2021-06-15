const user = require('../models/user')

const userDelete = (phone) => {
  user.destroy({
    where: {
      phone
    }
  })
}

module.exports = {
  userDelete
}