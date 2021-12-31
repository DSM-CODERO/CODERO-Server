const router = require('express')();
const controller = require('../controllers/createPost').default;
const verifyToken = require('../middleware/token');

const upload = require('../middleware/upload');

router.post('/', verifyToken, upload.array('image'), controller.createPost);

module.exports = router;
