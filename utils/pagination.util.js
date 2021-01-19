exports.paginatedResult = (page, limit, model) => {
  page = parseInt(page);
  limit = parseInt(limit);
  let startIndex = (page - 1) * limit;
  let endIndex = page * limit;
  let perPage = limit;
  let result = {}

  if (endIndex < model.length) {
    result.next = {
      page: page + 1,
      limit: perPage
    }
  }
  if (startIndex > 0) {
    result.previous = {
      page: page - 1,
      limit: perPage
    }
  }  
  return {
    startIndex: startIndex,
    perPage: perPage,
    result
  };
}