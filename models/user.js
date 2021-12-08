const Sequelize = require('sequelize');

module.exports =(sequelize, Datatypes) => {
  return sequelize.define("user", {
    id: {
      type: Datatypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true
    },
    password: {
      type: Datatypes.STRING(60),
      allowNull: false,
      unique: true,
    },
    username: {
      type: Datatypes.STRING(10),
      allowNull: false,
      unique: true,
    },
    email: { 
      type: Datatypes.STRING(36),
      allowNull: false,
      unique: true,
    }
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'User',
    tableName: 'user',
    paranoid: false,
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });
};