const router = require("express")();
const controller = require("../controllers/user");
const verifyToken = require("../middleware/token");

router.post("/", controller.sign_up);
router.post("/login", controller.login);
router.get("/mypage",verifyToken, controller.viewMyPage);

module.exports = router;