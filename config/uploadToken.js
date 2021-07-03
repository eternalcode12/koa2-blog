const qiniu = require('qiniu')
const accessKey = 'MhN2wnGWaQNrdQr2e9rBvwMa3SRCbdbs2jZk28PV'
const secretKey = 'ckisqe5s6JNcmNUoIfqio0aQORKOGC_D0s61poin'
const bucket = 'koa2-blog-img'
const {
  Result
} = require('./result')

// 生成token
const apiUploadToken = async ctx => {
  let mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
  let options = {
    scope: bucket,
    expires: 3600 * 2
  }
  let putPolicy = new qiniu.rs.PutPolicy(options)
  let uploadToken = putPolicy.uploadToken(mac)

  if (uploadToken) {
    ctx.body = new Result('token生成成功', 200, uploadToken)
  } else {
    ctx.body = 'error'
  }
}

module.exports = apiUploadToken