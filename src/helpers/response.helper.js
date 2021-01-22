exports.success = (i, n, status, data = null) => {
  const arr = ['Create', 'Get List', 'Get', 'Update', 'Delete', 'Login'];

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
  const arr = [ 'Already Exists', 'Not Exists', 'Page Not Found', 'Wrong Input', 'Expected', 'Authorization Header', 'Have No Access', 'unauthorization'];
  const result = ['invalid', 'unauthorization'];

  return {
    message: n + ' ' + arr[i],
    messageCode: result[mc].replace(' ','_').toUpperCase(),
    status: status
  }
}

errorHandler = (err, req, res, next) => {
  if (typeof (err) === 'string') {
      // custom application error
      return res.status(400).json({ message: err });
  }

  if (err.name === 'ValidationError') {
      // mongoose validation error
      return res.status(400).json({ message: err.message });
  }

  if (err.name === 'UnauthorizedError') {
      // jwt authentication error
      return res.status(401).json({ message: 'Invalid Token' });
  }

  // default to 500 server error
  return res.status(500).json({ message: err.message });
}

exports.error = (error) => {
  return {
    message: error.message,
    messageCode: error.messageCode,
    status: error.status
  }
}