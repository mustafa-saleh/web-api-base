const router = require("express").Router();
const { ResourceNotFound } = require("../controllers/not-found");
const { authenticate } = require("../middlewares/authentication");
const { getRoles, addRole } = require("../controllers/role-controller");

router.route("/").get(authenticate, getRoles).post(authenticate, addRole);
router.all("*", ResourceNotFound);

module.exports = router;
