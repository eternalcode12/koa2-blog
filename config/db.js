const Sequelize = require('sequelize')
const DBCONFIG = {
  DATABASE: 'blog',
  USERNAME: 'root',
  PASSWORD: '12345678',
  HOST: 'localhost',
  TYPE: 'mysql'
}

const sequelize = new Sequelize(DBCONFIG.DATABASE, DBCONFIG.USERNAME, DBCONFIG.PASSWORD, {
  host: DBCONFIG.HOST,
  dialect: DBCONFIG.TYPE
})

// 调用实例函数 .authenticate() 测试连接是否成功
// try {
//   sequelize.authenticate();
//   console.log("success")
// } catch (err) {
//   console.log('fail')
// }

module.exports = sequelize