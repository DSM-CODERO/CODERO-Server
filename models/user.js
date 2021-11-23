const Sequelize = require('sequelize');

module.exports =(sequelize, Datatypes) => {
  return sequelize.define("user", {
    user_id: {
      type: Datatypes.INTEGER,
      allowNull: true,
      primaryKey: true,
    },
    password: {
      type: Datatypes.STRING(60),
      allowNull: false,
      unique: true,
    },
    nick_id: {
      type: Datatypes.STRING(10),
      allowNull: false,
      unique: true,
    },
    email: { 
      type: Datatypes.STRING(36),
      allowNull: false,
      unique: true,
    }
  });
};