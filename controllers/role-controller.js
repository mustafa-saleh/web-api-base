const { Role } = require("../models");
const { BadRequest, InternalServerError } = require("../utils/http-errors");
const { errorsReducer } = require("../utils/mongoose");
const { successHandler } = require("../middlewares/handlers");

/**
 * @api {get} / Request Roles
 * @apiGroup Role
 * @apiSuccess (200) {Object} data Roles data
 * @access protected
 */
async function getRoles(req, res, next) {
  try {
    const roles = await Role.find({});
    successHandler(res, { data: roles });
  } catch (error) {
    const errors = errorsReducer(error.errors || "Failed to get Roles");
    next(new InternalServerError(errors));
  }
}

/**
 * @api {post} / Add Role
 * @apiGroup Role
 * @apiParam {String} name - Role unique identifier
 * @apiSuccess (200) {Object} data Created Role
 * @access protected
 */
async function addRole(req, res, next) {
  const name = req.body.name;
  try {
    const role = await Role.create({ name });
    successHandler(res, { statusCode: 201, data: role });
  } catch (error) {
    const errors = errorsReducer(error.errors || `Failed to add Role ${name}`);
    next(new BadRequest(errors));
  }
}

module.exports = { getRoles, addRole };
