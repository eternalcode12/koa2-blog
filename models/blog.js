// 这里是blog数据库
const Sequelize = require('sequelize')
const sequelize = require('../config/db')

const blogs = sequelize.define('blogs', {
  id: {
    type: Sequelize.BIGINT(11),
    primaryKey: true,
    autoIncrement: 1
  },
  imgUrl: {
    type: Sequelize.STRING(255),
    allowNull: true,
    comment: '图片地址'
  },
  tagDic: {
    type: Sequelize.STRING(255),
    allowNull: true,
    comment: '标签目录'
  },
  tags: {
    type: Sequelize.STRING(255),
    allowNull: true,
    comment: '标签'
  },
  username: {
    type: Sequelize.STRING(255),
    allowNull: false,
    comment: '用户'
  },
  count: {
    type: Sequelize.BIGINT(11),
    allowNull: false,
    default: 0,
    comment: '查看次数',
  },
  title: {
    type: Sequelize.STRING(255),
    allowNull: false,
    comment: '标题'
  },
  contents: {
    type: Sequelize.STRING(255),
    allowNull: false,
    comment: '内容'
  }
}, {
  timestamps: true
})

// sequelize.sync({
//   force: true
// })

module.exports = blogs