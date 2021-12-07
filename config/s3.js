require('dotenv').config();

const env = process.env;
 
const sthree = {
  accessKeyId: env.AWS_ACCESS_KEY,
  secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
  region: env.AWS_REGION,
};

module.exports = sthree;