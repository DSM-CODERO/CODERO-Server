const router = require('express')();
const createPost = require('./createPost');
const deletePost = require('./deletePost');
const readPost = require('./readPost');
const updatePost = require('./updatePost');
const like = require('./like');
const user = require('./user');
const comment = require('./comment');

router.use('/user', user);
router.use('/board', createPost);
router.use('/board', deletePost);
router.use('/board', readPost);
router.use('/board', updatePost);
router.use('/board', like);
router.use('/board', comment);

module.exports = router;
