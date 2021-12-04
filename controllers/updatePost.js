const { Board } = require("../models");

const UpdatePost = async(req, res) => {

    const userId = req.decoded.user_id;
    const BoardId = req.params.board_id;
    const { title, context, filed } = req.body;
    options = { multi: true };
    
    console.log(userId, BoardId, title, context, filed);

    try{
        const board = await Board.findOne({
            where : {
                board_id : BoardId
            },
        });

        if(board.user_id !== userId)
        {
            res.status(400).json({
                message: "게시물 수정 실패"
            });
            console.error(err);
        }
        else await board.update({
                title : title,
                context : context,
                filed : filed
            });

            res.status(200).json({
                message: "게시물 수정 성공"
            });
    } catch(err)
    {
        res.status(403).json({
            message: "게시물 수정 실패"
        });
        console.error(err);
    }
};

module.exports = {
    UpdatePost
};