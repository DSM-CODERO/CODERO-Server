'use strict';

const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || "development";
const config = require("../config/config");

const db = {};

const sequelize = new Sequelize(
    { ... config, sync: false }
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = this.User;
db.Comment = this.Comment;
db.Board = this.Board;
db.Like = this.Like;

db.User = require("./user")(sequelize, Sequelize);
db.Comment = require("./comment")(sequelize, Sequelize);
db.Board = require("./board")(sequelize, Sequelize);
db.Like = require("./like")(sequelize, Sequelize);

db.User.hasMany(db.Comment, { foreignKey: "user_id", tatgetKey: "id"});
db.Comment.belongsTo(db.User, { foreignKey: "user_id"});

db.User.hasMany(db.Like, { foreignKey: "user_id", tatgetKey: "id"});
db.Like.belongsTo(db.User, { foreignKey: "id"});

db.Board.hasMany(db.Comment, { foreignKey: "board_id", tatgetKey: "board_id"});
db.Comment.belongsTo(db.Board, { foreignKey: "board_id"});

db.Board.hasMany(db.Like, { foreignKey: "board_id", tatgetKey: "board_id"});
db.Like.belongsTo(db.Board, { foreignKey: "board_id"});

module.exports = db;