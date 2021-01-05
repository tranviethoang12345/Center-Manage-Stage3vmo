exports.success = (message, i, data) => {
  const arr = ['Create', 'Find All', 'Find', 'update', 'delete'];
  return {
    message: arr[i] + ' ' + message + ' ' + 'successful',
    messageCode: arr[i].toUpperCase() + '_' + message.replace(' ','_').toUpperCase() + '_' + 'SUCCESSFUL',
    data: data,
    status: 200
  }
}