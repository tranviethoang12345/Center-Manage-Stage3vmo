exports.paginatedResult = async (model) => {
  try {
    return (req, res, next) => {
      const page = parseInt(req.query.page)
      const limit = parseInt(req.query.limit)

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

      results.results = model.slice(startIndex, endIndex);
      res.paginatedResult = results;
      next();
    }
  } catch (error) {
    throw error;
  }
}

app.get('/', paginatedResult(posts), (req, res) => {
  res.json(res.paginatedResult)
})