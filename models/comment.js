const Sequelize = require('sequelize');

module.exports = (sequelize, Datatypes) => {
  return sequelize.define("comment", {
    comment_id: {
      type: Datatypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    board_id: {
      type: Datatypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: Datatypes.INTEGER,
      allowNull: false,
    },
    context: {
      type: Datatypes.TEXT,
      allowNull: true,
    },
    reply_comment_id: {
      type: Datatypes.INTEGER,
      allowNull: true,
    },
    picture: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    isDeleted: {
      type: Datatypes.BOOLEAN,
    },
    created_at: {
      type: Datatypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    updated_at: {
      type: Datatypes.DATE,
      allowNull: false,
    },
  });
};