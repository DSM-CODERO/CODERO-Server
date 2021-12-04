const router = require("express")();
const multer = require("multer");
const createPost = require("./createPost");
const deletePost = require("./deletePost");
const readPost = require("./readPost");
const updatePost = require("./updatePost");
const like = require("./like");
const user = require("./user");

router.use("/board", createPost);
router.use("/board", deletePost);
router.use("/board", readPost);
router.use("/board", updatePost);

router.use("/board", like);

router.use("/user", user);

module.exports = router;