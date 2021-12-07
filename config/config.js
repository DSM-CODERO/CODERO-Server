require('dotenv').config();
const env = process.env;
 
const development = {
  username: env.MYSQL_USERNAME,
  password: env.MYSQL_PASSWORD,
  database: env.MYSQL_DATABASE,
  dialect: "mysql"
};

module.exports = development;