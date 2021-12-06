const router = require("express")();
const controller = require("../controllers/comment.controller");
const verifyToken = require("../middleware/token");
const path = require("path");

const upload = require("../middleware/upload");
const multer = require("multer")
// const storage = multer.diskStorage({
//   destination: "uploads/",
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname)
//   },
 
// })

// const upload = multer({storage: storage});

router.get('/:board_id/comment', controller.GetComment);
router.post("/:board_id/comment", verifyToken, upload.single('image'), controller.Commentcreate);
router.patch('/:baord_id/comment/:comment_id', verifyToken, controller.Commentupdate);
router.delete('/:board_id/comment/:comment_id', verifyToken, controller.Commentdelete);

module.exports = router;