const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
aws.config.loadFromPath(__dirname + '/../config/s3.json');

const s3 = new aws.S3();
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'elasticbeanstalk-us-east-2-079870045884',
        acl: 'public-read-write',
        filefilter: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            if(ext !== "jpeg" || "jpg" || "png" || "gif" || "pdf" || "svg") {
                return cb(null, false)
            }
            cb(null, true)
        },
        key: (req, file, cb) => {
            cb(null, Date.now() + '.' + file.originalname.split('.').pop()); 
        },
        limit: {
            filesize: 1024 * 1024 * 20
          },
    }),
});
module.exports = upload;