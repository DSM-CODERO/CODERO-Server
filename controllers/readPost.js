const { Board } = require("../models");
const { beforeFindAfterExpandIncludeAll } = require("../models/user");

const ReadOnePost = async(req, res) => {
    const BoardId = req.params.board_id;

    try{
        const board = await Board.findOne({
            where: {
                board_id : BoardId
            },
        });
        
        res.status(200).json(board);
    } catch(err){
    
        res.status(404).json({
            message: "해당 데이터 없음"
        });

        console.error(err);
    }
};

const ReadAllPost = async(req, res) => {
    const NickName  = req.params.nickname;

    const pageNum = req.query.page;
    const offset = 0;

    try{
        if(pageNum > 1){
            offset = 7 * (pageNum -1)
        };
        const boards = await Board.findAll({
            where: {
                nickname : NickName
            },
            offset: offset,
            limit: 8,
            order: [['created_at', 'DESC']],
        });

        res.status(200).json(boards);

    } catch(err)
    {
        res.status(404).json({
            message: "작성된 게시물 없음"
        })
    }
};

const ReadAllView = async(req, res) => {

    const pageNum = req.query.page;
    const offset = 0;
    
    try{
        if(pageNum > 1){
            offset = 7 * (pageNum -1)
        };
        const boards = await Board.findAll({
            offset: offset,
            limit: 8,
            order: [['created_at', 'DESC']] 
            });
    
        res.status(200).json(boards);
    } catch(err)
    {
        res.status(404).json({
            message: "작성된 게시물 없음"
        });
    }

};

const ReadFiledPost = async(res, req) => {
    const filed = req.body;
    const offset = 0;

    try{
        if(pageNum > 1){
            offset = 7 * (pageNum - 1)
        };
        const boards = await Board.findAll({
            where : {
                filed : filed
            },
            offset: offset,
            limit: 8,
            order: [['createed_at', 'DESC']]
        });
        res.status(200).json(boards);
    } catch (err)
    {
        res.status(404).json({
            message : "작성된 게시물 없음"
        });
    }
};


module.exports = {
    ReadOnePost,
    ReadAllPost,
    ReadAllView,
    ReadFiledPost
}