exports.success = (i, n, status, data = null) => {
  const arr = ['Create', 'Find All', 'Find', 'Update', 'Delete'];

  return {
    message: arr[i] + ' ' + n + ' ' + 'successful',
    messageCode: arr[i].toUpperCase() + '_' + n.replace(' ','_').toUpperCase() + '_' + 'SUCCESSFUL',
    data: data,
    status: status
  }
}

// class ErrorHandler extends Error {
//   constructor(status, message, messageCode) {
//     super(); // this = {status, message, code = undefined}
//     this.status = status;
//     this.message = message;
//     this.messageCode = messageCode;
//   }
// }

exports.errorHandler = (i, n, mc, status) => {
  const arr = [ 'already exists', 'not exists', 'Page not found'];
  const result = ['invalid'];

  return {
    message: n + ' ' + arr[i],
    messageCode: result[mc].toUpperCase(),
    status: status
  }
}

exports.error = (error) => {
  return {
    message: error.message,
    messageCode: error.messageCode,
    status: error.status
  }
}