const Sequelize = require('sequelize');

module.exports =(sequelize, Datatypes) => {
  return sequelize.define("refresh_token", {
    id: {
        type: Datatypes.BIGINT,
        primaryKey: true,
    },
    user_id: {
        type: Datatypes.INTEGER,
        allowNull: false,
    },
    token: { 
        type: Datatypes.STRING,
        allowNull: false,
    },
    expriyDate: {
        type: Datatypes.DATE,
        allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'Refresh_token',
    tableName: 'refresh_token',
    paranoid: false,
    charset: 'utf8',
    collate: 'utf8_general_ci',
  })
}