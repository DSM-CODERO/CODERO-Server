const router = require("express")();
const controller = require("../controllers/like");
const verifyToken = require("../middleware/token");

router.put("/:board_id/like", verifyToken, controller.likePost);
router.delete("/:board_id/like", verifyToken, controller.unlikePost);
router.get("/my/like", verifyToken, controller.readlikepost);

module.exports = router;