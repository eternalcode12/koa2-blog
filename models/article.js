const Sequelize = require('sequelize')
const sequelize = require('../config/db')

const articles = sequelize.define('articles', {
  id: {
    type: Sequelize.BIGINT(11),
    primaryKey: true,
    autoIncrement: 1
  },
  a_id: {
    type: Sequelize.BIGINT(11),
    allowNull: false,
    comment: '标题ID'
  },
  title: {
    type: Sequelize.STRING(255),
    allowNull: false,
    comment: '标题'
  },
  content: {
    type: Sequelize.STRING(255),
    allowNull: false,
    comment: '内容'
  },
  comments: { // 评论
    type: Sequelize.STRING(255),
    allowNull: false,
    comment: '评论'
  },
  likes: { // 点赞数
    type: Sequelize.BIGINT(11),
    allowNull: false,
    comment: '点赞数'
  }
}, {
  timestamps: true
})

// sequelize.sync({
//   force: false
// })

module.exports = articles