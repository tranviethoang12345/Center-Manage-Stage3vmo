exports.success = (message, i, data) => {
  const arr = ['Create', 'Find All', 'Find', 'update', 'delete'];
  return {
    message: arr[i] + ' ' + message + ' ' + 'successful',
    messageCode: arr[i].toUpperCase() + '_' + message.replace(' ','_').toUpperCase() + '_' + 'SUCCESSFUL',
    data: data,
    status: 200
  }
}

exports.error = (error) => {
  // if (error.code == 11000)
  // {
  //   res.json(body.name + ' name has been create');
  // }
  return {
    error: error.message,
  }
}