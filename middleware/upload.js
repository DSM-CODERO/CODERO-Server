const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
aws.config.loadFromPath(__dirname + '/../config/s3.json');

const s3 = new aws.S3();
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'elasticbeanstalk-ap-northeast-9-820927005893',
        acl: 'public-read-write',
        key: function(req, file, cb) {
            cb(null, Math.floor(Math.random() * 1000).toString() + Date.now() + '.' + file.originalname.split('.').pop());
        },
        limit: {
            fileSize: 1024 * 1024 * 20
        },
    }),
});
module.exports = upload;