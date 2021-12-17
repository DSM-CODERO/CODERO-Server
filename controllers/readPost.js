const { Board } = require("../models");

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
    const userName  = req.params.username;

    try{
        let pageNum = req.query.page;
        let offset = 0;
    
        if(pageNum > 1){
            offset = 8 * (pageNum -1)
        };
        const boards = await Board.findAll({
            where: {
                userName : userName
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
        console.error(err);
    }
};

const ReadFiledPost = async(req, res) => {
    const Filed = req.params.filed;

    try{
        let pageNum = req.query.page;
        let offset = 0;
        if(pageNum > 1){
            offset = 8 * (pageNum - 1)
        };
        const boards = await Board.findAll({
            where: {
                filed: Filed
            },
            offset : offset,
            limit: 8,
            order: [['created_at', 'DESC']],
        });

        res.status(200).json(boards);
    } catch(err) {
        res.status(404).json({
            message: "이 분야 게시글 없음"
        });
        console.error(err);
    }
}

const ReadAllView = async(req, res) => {
     
    try{
        let pageNum = req.query.page;
        let offset = 0;

        if(pageNum > 1){
            offset = 8 * (pageNum -1)
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

const ReadMyPost = async(req, res) => {
    const user = req.decoded.user_id;
    
    try{
        let pageNum = req.query.page;
        let offset = 0;
        
        if(pageNum > 1){
            offset = 5 * (pageNum -1)
        };
        const boards = await Board.findAll({
            where: {
                user_id : user
            },
            offset: offset,
            limit: 5,
            order: [['created_at', 'DESC']]
        });

        res.status(200).json(boards);

    } catch(err){
        res.status(404).json({
            message : "작성한 게시물 없음"
        });
    }
};

module.exports = {
    ReadFiledPost,
    ReadAllView,
    ReadOnePost,
    ReadAllPost,
    ReadMyPost
}