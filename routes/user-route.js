const router = require("express").Router();
const { authenticate } = require("../middlewares/authentication");
const { ResourceNotFound } = require("../controllers/not-found");
const { getUserbyId, addUser } = require("../controllers/user-controller");

router.route("/:id").get(authenticate, getUserbyId);
router.route("/register").post(addUser);
router.all("*", ResourceNotFound);

module.exports = router;
