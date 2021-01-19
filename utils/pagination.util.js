exports.paginatedResult = (page, limit, model) => {
  page = parseInt(page);
  limit = parseInt(limit);
  let startIndex = (page - 1) * limit
  let endIndex = page * limit
  let result = {}

  if (endIndex < model.length) {
    result.next = {
      page: page + 1,
      limit: limit
    }
  }
  if (startIndex > 0) {
    result.previous = {
      page: page - 1,
      limit: limit
    }
  }  
  return result;
}