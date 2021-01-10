// // Import Service
const statusService = require('../../service/message/status');

function paginatedResult(model) {
  return async (req, res, next) => {
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

    try {
      results.results = await model.find().limit(limit).skip(startIndex).exec();
      next();
    } catch (error) {
      res.status(500).json(statusService.error(error));
    }
    res.paginatedResult = results;
  }
};

router.get('/techStack', paginatedResult(techStackModel), techStackControllers.getAllTechStack);