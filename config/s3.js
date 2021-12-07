require('dotenv').config();

const env = process.env;
 
const sthree = {
  accessKeyId: env.AWSACCESSKEY,
  secretAccessKey: env.AWSSECRETACCESSKEY,
  region: env.AWSREGION,
};

module.exports = sthree;