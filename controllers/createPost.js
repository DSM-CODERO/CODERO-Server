const { Board } = require("../models");
const multer = require("multer");

const createPost = async(req, res) => {
    const image = req.file;
    const userId = req.decoded.user_id;
    const userNickname = req.decoded.nickname;
    const { title, context, filed } = req.body;

    console.log(userId, userNickname, title, context, filed);
    console.log(image);
    
    try{ 
        await Board.create({
            user_id : userId,
            nickname : userNickname,
            title, 
            context,
            filed,
            picture : image.path
        });
        
        res.status(200).json({
            message: "게시물 작성 및 사진 업로드 성공",
        });

    } catch(err) {
        res.status(403).json({
            message: "게시물 작성 및 사진 업로드 실패"
        });
        console.error(err);
    }} 

module.exports = {
    createPost
};