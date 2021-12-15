const router = require("express")();
const controller = require("../controllers/comment.controller");
const verifyToken = require("../middleware/token");
const upload = require("../middleware/upload");

router.get('/:board_id/comment', controller.GetComment);
router.post("/:board_id/comment", verifyToken, upload.array('image'), controller.Commentcreate);
router.patch('/:board_id/comment/:comment_id', verifyToken, controller.Commentupdate);
router.delete('/:board_id/comment/:comment_id', verifyToken, controller.Commentdelete);

module.exports = router;