const router = require("express")();
const commentCtrl = require("../controllers/comment.controller");
const verifyToken = require("../middleware/token");

const upload = require("../middleware/upload");

router.get('/', verifyToken, commentCtrl.GetComment);
router.post("/", verifyToken, upload, commentCtrl.Commentcreate);
router.patch('/:id', verifyToken, commentCtrl.Commentupdate);
router.delete('/:id', verifyToken, commentCtrl.Commentdelete);

module.exports = router;