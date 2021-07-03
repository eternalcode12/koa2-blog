const {
  allCode,
  msg
} = require('../config/code')
const {
  Result,
  ResultData
} = require('../config/result')
const {
  getBlogContent,
  getBlogContentAdmin,
} = require('../sql/select')

// 获取博客数据
const apiGetBlogContent = async ctx => {
  const {
    username,
    current,
    size
  } = ctx.query
  let result = await getBlogContent(username, current, size)
  ctx.body = new Result("操作成功", allCode.SUCCESS, result)
}

// 后台获取博客数据
const apiGetBlogContentAdmin = async ctx => {
  const {
    username,
    current,
    size
  } = ctx.params
  let result = await getBlogContentAdmin(username, current, size)
  ctx.body = new Result("操作成功", allCode.SUCCESS, new ResultData(result))
}

module.exports = {
  apiGetBlogContent,
  apiGetBlogContentAdmin
}