exports.success = (i, n, status, data = null) => {
  const arr = ['Create', 'Get List', 'Get', 'Update', 'Delete'];

  return {
    message: arr[i] + ' ' + n + ' ' + 'successful',
    messageCode: arr[i].replace(' ','_').toUpperCase() + '_' + n.replace(' ','_').toUpperCase() + '_' + 'SUCCESSFUL',
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
  const arr = [ 'Already Exists', 'Not Exists', 'Page Not Found' ];
  const result = ['invalid'];

  return {
    message: n + ' ' + arr[i],
    messageCode: result[mc].replace(' ','_').toUpperCase(),
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