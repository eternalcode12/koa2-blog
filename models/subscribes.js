const Sequelize = require("sequelize")
const sequelize = require('../config/db')

const subscribes = sequelize.define('subscribes', {
  id: {
    type: Sequelize.BIGINT(11),
    primaryKey: true,
    autoIncrement: 1
  },
  email: {
    type: Sequelize.STRING(255),
    allowNull: false,
    comment: '邮箱'
  },
}, {
  timestamps: true
})

// sequelize.sync({
//   force: true
// })

module.exports = subscribes