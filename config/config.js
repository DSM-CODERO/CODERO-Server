require('dotenv').config();
const env = process.env;
 
const development = {
  username: env.MYSQLUSERNAME,
  password: env.MYSQLPASSWORD,
  database: env.MYSQLDATABASE,
  dialect: env.MYSQLDIALECT,
  host: env.MYSQLHOST
};

module.exports = development;