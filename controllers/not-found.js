const { NotFound } = require("../utils/http-errors");

/**
 * @api {all} any Page not available
 * @apiGroup All
 */
async function ResourceNotFound(req, res, next) {
  next(new NotFound("Resource Not Found"));
}

module.exports = { ResourceNotFound };
