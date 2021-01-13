exports.success = (i, res, n, status, data = null) => {
  const arr = ['Create', 'Find All', 'Find', 'update', 'delete'];
  const result = ['successful', 'fail', 'page not found']
  return {
    message: arr[i] + ' ' + n + ' ' + result[res],
    messageCode: arr[i].toUpperCase() + '_' + n.replace(' ','_').toUpperCase() + '_' + result[res].replace(' ','_').toUpperCase(),
    data: data,
    status: status
  }
}

class ErrorHandler extends Error {
  constructor(status, message, messageCode) {
    super(); // this = {status, message, code = undefined}
    this.status = status;
    this.message = message;
    this.messageCode = messageCode;
  }
}

exports.ErrorHandler = (status, message, messageCode) => {
  return {
    message: message,
    messageCode: messageCode,
    status: status
  }
}

exports.error = (error) => {
  return {
    error: error.message,
  }
}