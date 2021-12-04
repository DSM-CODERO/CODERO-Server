const router = require("express")();
const controller = require("../controllers/user");

router.post("/", controller.sign_up);
router.post("/login", controller.login);

module.exports = router;