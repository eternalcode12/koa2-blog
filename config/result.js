class Result {
  constructor(msg, code = 200, data = {}) {
    this.msg = msg;
    this.code = code;
    this.data = data;
  }
}

// 封装请求返回的对应信息
class ResultData {
  constructor(data) {
    this.data = data
  }
}

module.exports = {
  Result,
  ResultData
}