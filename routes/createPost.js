const router = require("express")();
const controller = require("../controllers/createPost");
const verifyToken = require("../middleware/token");
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
       destination: "uploads/",    
       filename: (req, file, cb) => { 
            cb(null, Date.now() + "-" + file.originalname);   
        }, });

         
    const upload = multer({
        storage: storage,
      });        
router.post("/", verifyToken, upload.single('image'), controller.createPost);

module.exports = router;