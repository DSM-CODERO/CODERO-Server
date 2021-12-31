const { Board } = require('../models');

const createPost = async (req, res) => {
  const image = req.files;
  const userId = req.decoded.user_id;
  const userName = req.decoded.username;
  const { title, context, filed } = req.body;

  console.log(userId, userName, title, context, filed);
  console.log(image);
  if (image === undefined) {
    try {
      await Board.create({
        user_id: userId,
        username: userName,
        title,
        context,
        filed,
      });

      res.status(200).json({
        message: '게시물 작성 성공',
      });
    } catch (err) {
      res.status(403).json({
        message: '게시물 작성 실패',
      });
      console.error(err);
    }
  } else {
    try {
      await Board.create({
        user_id: userId,
        username: userName,
        title,
        context,
        filed,
        image: image.location,
      });

      res.status(200).json({
        message: '게시물 작성 및 사진 업로드 성공',
      });
    } catch (err) {
      res.status(403).json({
        message: '게시물 작성 및 사진 업로드 실패',
      });
      console.error(err);
    }
  }
};

module.exports = {
  createPost,
};
