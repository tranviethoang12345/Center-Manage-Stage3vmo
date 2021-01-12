exports.paginatedResult = async (paginatedRequest, model) => {
  const {page, limit} = paginatedRequest;

  const startIndex = (page - 1) * limit
  const endIndex = page * limit
  const results = {}

  if (endIndex < model.length) {
    results.next = {
      page: page + 1,
      limit: limit
    }
  }
  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit: limit
    }
  }
  try {
    results.results = await model
      .limit(limit)
      .skip(startIndex);
    return results;
  } catch (error) {
    throw error;
  }
}