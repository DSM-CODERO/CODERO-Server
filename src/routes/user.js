const router = require('express')();
const controller = require('../controllers/user');
const verifyToken = require('../middleware/token');

router.post('/', controller.signup);
router.post('/login', controller.login);
router.get('/mypage', verifyToken, controller.viewMyPage);
router.post('/email', controller.verifyEmail);

module.exports = router;
