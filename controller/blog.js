const {
  allCode,
  msg
} = require('../config/code')
const {
  Result,
  ResultData
} = require('../config/result')
const {
  getBlogContent
} = require('../sql/select')

// 获取博客数据
const apiGetBlogContent = async ctx => {
  const { username } = ctx.params
  let result = await getBlogContent(username)
  ctx.body= new Result("操作成功", allCode.SUCCESS, result)
}

module.exports = {
  apiGetBlogContent
}
