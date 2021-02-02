const { successHandler } = require("../middlewares/handlers");

/**
 * @api {GET} / Welcome Message
 * @apiGroup Home
 * @apiSuccess (200) {Object} data - welcome message and version
 * @access public
 */
function homePage(req, res, next) {
  const response = {
    data: {
      message: "WEB_API_BASE with docker & CI/CD Pipelines",
      version: "2.0.0",
    },
  };
  successHandler(res, response);
}

module.exports = homePage;
