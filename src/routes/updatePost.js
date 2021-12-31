const router = require('express')();
const controller = require('../controllers/updatePost');
const verifyToken = require('../middleware/token');

router.patch('/:board_id', verifyToken, controller.UpdatePost);

module.exports = router;
