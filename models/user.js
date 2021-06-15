const Sequelize = require("sequelize")
const sequelize = require('../config/db')

const users = sequelize.define('users', {
  id: {
    type: Sequelize.BIGINT(11),
    primaryKey: true
  },
  username: Sequelize.STRING(255),
  password: Sequelize.STRING(255),
}, {
  timestamps: true
})

// 这里可以依据配置好的内容快速生成对应的表(force: true)是破坏性的生成表，建议项目启动前手动执行，然后关闭该功能
sequelize.sync({
  force: true
})

module.exports = users