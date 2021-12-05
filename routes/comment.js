const router = require("express")();
const multer = require("multer")
const commentCtrl = require("../controllers/comment.controller");
const verifyToken = require("../middleware/token");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname)
  },
  filefilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if(ext !== "jpeg" || "jpg" || "png" || "gif" || "pdf" || "svg") {
        return cb(null, false)
    }
    cb(null, true)
  },
  limit: {
    filesize: 1024 * 1024 * 20
  },
})

const upload = multer({storage: storage}).array("images", 5);

router.get('/', verifyToken, commentCtrl.GetComment);
router.post("/", verifyToken, upload, commentCtrl.Commentcreate);
router.patch('/:id', verifyToken, commentCtrl.Commentupdate);
router.delete('/:id', verifyToken, commentCtrl.Commentdelete);

module.exports = router;