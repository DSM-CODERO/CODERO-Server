const Sequelize = require('sequelize');

module.exports =(sequelize, Datatypes) => {
  return sequelize.define("like", {
    user_id: {
      type: Datatypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    board_id: {
      type: Datatypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true,
    }
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'Like',
    tableName: 'likes',
    paranoid: false,
    charset: 'utf8',
    collate: 'utf8_general_ci',
  })
}

