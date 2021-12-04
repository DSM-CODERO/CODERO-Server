const router = require("express")();
const controller = require("../controllers/readPost");
const verifyToken = require("../middleware/token");

router.get("/", controller.ReadAllView);
router.get("/:nickname", controller.ReadAllPost);
router.get("/:board_id", controller.ReadOnePost);

module.exports = router;