class Result {
  constructor(msg, code = 200, data = []) {
    this.msg = msg;
    this.code = code;
    this.data = data;
  }
}

module.exports = Result