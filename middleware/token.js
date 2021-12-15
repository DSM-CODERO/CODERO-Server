const jwt = require("jsonwebtoken");

const tokenMiddleware = async(req, res, next) => {
    const token = req.headers.authorization.split('Bearer ')[1] || req.query.token;

    if (!token) {
        return res.status(403).json({
            message: "로그인 되어 있지 않음",
        });
    }
    try{
        await jwt.verify(token, req.app.get("jwt-secret"), (err, decoded)=> {
            if(err) throw err;
            req.decoded = decoded;
            next();
        });
    } catch(err) {
        res.status(403).json({
            message: "로그인 되어 있지 않음",
        });
    }
};



module.exports = tokenMiddleware;