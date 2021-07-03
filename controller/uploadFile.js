const fs = require('fs')
const uploadFile = async ctx => {
  const file = ctx.request.files.f
  // const reader = fs.createReadStream(file.path)
  console.log(file)
  ctx.body = {
    code: 200,
    file
  }
}

module.exports = uploadFile