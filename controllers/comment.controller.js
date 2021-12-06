const { Comment } = require("../models");
const multer = require("multer");

const GetComment = async(req, res) => {
    const BoardID = req.params.board_id;
    
    try{
        const comment = await Comment.findAll({
            where: {
                board_id : BoardID
            },
        });
        res.status(200).json(comment);
    } catch(err){
        res.status(404).json({
            message: err.message
        });
    }
}

const Commentcreate = async(req, res) => {
    const UserID = req.decoded.user_id;
    const BoardId = req.params.board_id;
    const nickName = req.decoded.nickname;
    const Image = req.file;
    const { context } = req.body;

    
    try{
        await Comment.create({
            user_id : UserID,
            nickname : nickName,
            context : context,
            picture: Image.path,
            board_id : BoardId,
            image : Image.path
        })
        res.status(200).json({ 
            message: "댓글 작성 성공"
        });
    } catch(err){
        res.status(404).json({
            message: "댓글 작성 실패"
        });
        console.error(err)
    }
}


const Commentupdate = async(req, res) => {
    const UserID = req.decoded.user_id;
    const CommentID = req.params.comment_id;
    const { context } = req.body;

    try{
        const result = await Comment.findOne({
            where : {
                comment_id : CommentID
            },
        });
        if(result.user_id !== UserID) {
            res.status(400).json({
                message: "본인 댓글만 수정 가능"
            });
        } else{
            await result.update({
                context : context,
            });
            res.status(200).json({
                message: "댓글 수정 성공"
            });
        } 
    } catch(err) {
        res.status(403).json({
            message: "댓글 수정 실패"
        });
        console.error(err);
    }
} 

const Commentdelete = async(req, res) => {
    const UserID = req.decoded.user_id;
    const CommentID = req.params.comment_id;

    try{
        const result = await Comment.findOne({
            where : {
                comment_id : CommentID 
            },
        });
        if(result.user_id !== UserID) {
            res.status(400).json({
                message: "본인 댓글만 삭제 가능"
            });
        } else {
            await result.destroy();
            res.status(200).json({
                message: "댓글 삭제 성공"
            });
        };
    } catch(err) {
        res.status(403).json({
            message: "댓글 삭제 실패"
        });
    }
} 

module.exports = {
    GetComment,
    Commentcreate,
    Commentupdate,
    Commentdelete
}
