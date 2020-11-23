const router = require("express").Router();
const { login, logout } = require("../controllers/auth-controller");
const { ResourceNotFound } = require("../controllers/not-found");
const { checkLoginParams } = require("../middlewares/validators");

router.route("/login").post(checkLoginParams, login);
router.route("/logout").get(logout);
router.all("*", ResourceNotFound);

module.exports = router;
