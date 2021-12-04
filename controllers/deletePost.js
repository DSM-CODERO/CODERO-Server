const { Board, Like } = require("../models");

const deletePost = async(req, res) => {
    const BoardId  = req.params.board_id;
    const UserId = req.decoded.user_id;

    try{
        const board =  await Board.findOne({
            where : {
                 board_id : BoardId 
            },
        });

        console.log(board);

        if(board.user_id !== UserId)
        {
            res.status(400).json({
                message: "본인 게시물만 삭제 가능"
            });
            console.error(err); 
        } else {
            await Like.destroy({
                where : {
                    board_id : BoardId
                },
            });
            await board.destroy();

            res.status(200).json({
                 message: "게시물 삭제 성공"
            });
        };

    } catch(err)
    {
        res.status(403).json({
            message: "게시물 삭제 실패"
        });
      console.error(err);
    }
};

module.exports = {
    deletePost
};