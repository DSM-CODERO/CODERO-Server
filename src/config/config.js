require('dotenv').config();

const { env } = process;

const development = {
  username: env.MYSQLUSERNAME,
  password: env.MYSQLPASSWORD,
  database: env.MYSQLDATABASE,
  host: env.MYSQLHOST,
};

module.exports = development;
