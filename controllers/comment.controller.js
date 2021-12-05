const { Comment } = require("../models");

const GetComment = async(req, res) => {
    const BoardID = req.decoded.board_id;
    
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
    const BoardID = req.decoded.board_id;
    const nickName = req.decoded.nickname;
    const Image = req.files;
    const { context } = req.body;
    const path = Image.map(img => img.path);
    
    try{
        const result = await Comment.findOne({
            where : {
                board_id : BoardID
            },
        });

        await result.create({
            user_id : UserID,
            nickname : nickName,
            context : context,
            image : Image
        });

        res.status(200).json({ 
            result,
            message: "Comment Created successfully" ,
            path
        });
    } catch(err){
        res.status(404).json({
            message: "Failed Created Comment"
        });
        console.error(err)
    }
}


const Commentupdate = async(req, res) => {
    const UserID = req.decoded.user_id;
    const CommentID = req.body;
    const { context } = req.body;

    try{
        const result = await Comment.findOne({
            where : {
                comment_id : CommentID
            },
        });
        if(result.user_id !== UserID) {
            res.status(400).json({
                message: "Failed Updated Comment"
            });
        } else await result.update({
                context : context,
            });
            res.status(200).json({
                message: "Comment Updated successfully"
            });
    } catch(err) {
        res.status(403).json({
            message: "Failed Updated Comment"
        });
    }
} 

const Commentdelete = async(req, res) => {
    const UserID = req.decoded.user_id;
    const CommentID = req.body;

    try{
        const result = await Comment.findOne({
            where : {
                comment_id : CommentID 
            },
        });
        if(result.user_id !== UserID) {
            res.status(400).json({
                message: "Comments made by other users cannot be deleted."
            });
        } else {
            await result.destroy();
            res.status(200).json({
                message: "Comment Deleted successfully"
            });
        };
    } catch(err) {
        res.status(403).json({
            message: "Failed Deleted Comment"
        });
    }
} 

module.exports = {
    GetComment,
    Commentcreate,
    Commentupdate,
    Commentdelete
}
