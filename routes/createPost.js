const router = require("express")();
const controller = require("../controllers/createPost");
const verifyToken = require("../middleware/token");
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: "uploads/",    
    filename: (req, file, cb) => { 
        cb(null, Date.now() + "-" + file.originalname);   
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
});
         
const upload = multer({
    storage: storage,
});
        
router.post("/", verifyToken, upload.array('image'), controller.createPost);

module.exports = router;