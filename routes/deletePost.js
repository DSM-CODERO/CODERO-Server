const router = require("express")();
const controller = require("../controllers/deletePost");
const verifyToken = require("../middleware/token");

router.delete("/:board_id", verifyToken,controller.deletePost);

module.exports = router;