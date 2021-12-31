const router = require('express')();
const controller = require('../controllers/readPost');
const verifyToken = require('../middleware/token');

router.get('/allview', controller.ReadAllView);
router.get('/filed/:filed', controller.ReadFiledPost);
router.get('/username/:username', controller.ReadAllPost);
router.get('/oneview/:board_id', controller.ReadOnePost);
router.get('/mypage', verifyToken, controller.ReadMyPost);

module.exports = router;
