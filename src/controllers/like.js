const { Like } = require('../models');

const likePost = async (req, res) => {
  const userId = req.decoded.user_id;
  const BoardId = req.params.board_id;

  try {
    await Like.create({
      user_id: userId,
      board_id: BoardId,
    });

    res.status(200).json({
      message: '좋아요 +1',
    });
  } catch (err) {
    res.status(400).json({
      message: '이미 처리됨',
    });
    console.error(err);
  }
};

const unlikePost = async (req, res) => {
  const userId = req.decoded.user_id;
  const BoardId = req.params.board_id;

  try {
    const board = await Like.findOne({
      where: {
        user_id: userId,
        board_id: BoardId,
      },
    });

    console.log(board);

    if (board.user_id !== userId) {
      res.status(403).json({
        message: '본인 계정으로만 좋아요 취소 가능',
      });
    } else {
      await board.destroy();

      res.status(200).json({
        message: '좋아요 -1',
      });
    }
  } catch (err) {
    res.status(404).json({
      message: '과거 좋아요 안 함',
    });
    console.error(err);
  }
};

const readlikepost = async (req, res) => {
  const UserId = req.decoded.user_id;

  try {
    const like = await Like.findAll({
      where: {
        user_id: UserId,
      },
    });

    res.status(200).json(like);
  } catch (err) {
    res.status(404).json({
      message: '좋아요한 게시물 없음',
    });
    console.error(err);
  }
};

module.exports = {
  likePost,
  unlikePost,
  readlikepost,
};
