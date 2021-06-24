const Sequelize = require("sequelize")
const sequelize = require('../config/db')

const contacts = sequelize.define('contacts', {
  id: {
    type: Sequelize.BIGINT(11),
    primaryKey: true,
    autoIncrement: 1
  },
  name: {
    type: Sequelize.STRING(255),
    allowNull: false,
    comment: '姓名'
  },
  email: {
    type: Sequelize.STRING(255),
    allowNull: false,
    comment: '邮箱'
  },
  phone: {
    type: Sequelize.STRING(255),
    allowNull: false,
    comment: '电话'
  }
}, {
  timestamps: true
})

// sequelize.sync({
//   force: true
// })

module.exports = contacts