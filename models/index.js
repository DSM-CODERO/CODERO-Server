'use strict';

const Sequelize = require('sequelize');
const User = require('./user');
const Comment = require('./comment');
const Like = require('./like');
const Board = require('./board');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(
    config.database, 
    config.username, 
    config.password, 
    config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User;
db.Comment = Comment;
db.Board = Board;
db.Like = Like;

User.init(sequelize);
Comment.init(sequelize);
Like.init(sequelize);
Board.init(sequelize);

User.associate(db);
Comment.associate(db);
Like.associate(db);
Board.associate(db);

module.exports = db;