const router = require("express")();
const controller = require("../controllers/readPost");

router.get("/allview", controller.ReadAllView);
router.get("/filed/:filed", controller.ReadFiledPost);
router.get("/:board_id", controller.ReadOnePost);
router.get("/nickname/:nickname", controller.ReadAllPost);

module.exports = router;