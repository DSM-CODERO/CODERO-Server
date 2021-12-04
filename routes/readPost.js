const router = require("express")();
const controller = require("../controllers/readPost");
const verifyToken = require("../middleware/token");

router.get("/:board_id", controller.ReadOnePost);
router.get("/", controller.ReadAllView);
router.get("/nickname/:nickname", controller.ReadAllPost);

module.exports = router;