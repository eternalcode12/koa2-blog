const Sequelize = require("sequelize")
const sequelize = require('../config/db')

const users = sequelize.define('users', {
  id: {
    type: Sequelize.BIGINT(11),
    primaryKey: true,
    autoIncrement: 1
  },
  // u_id: {
  //   type: Sequelize.BIGINT(11),
  //   allowNull: false,
  //   comment: '用户ID',
  // },
  username: {
    type: Sequelize.STRING(255),
    allowNull: false,
    comment: '用户名'
  },
  password: {
    type: Sequelize.STRING(255),
    allowNull: false,
    comment: '密码'
  },
  phone: {
    type: Sequelize.STRING(255),
    allowNull: false,
    comment: '手机号'
  },
}, {
  timestamps: true
})

// 这里可以依据配置好的内容快速生成对应的表(force: true)是破坏性的生成表，建议项目启动前手动执行，然后关闭该功能
// sequelize.sync({
//   force: true
// })

module.exports = users