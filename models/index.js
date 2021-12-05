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

<<<<<<< Updated upstream
db.User = User;
db.Comment = Comment;
db.Board = Board;
db.Like = Like;
=======
db.User = require("./user")(sequelize, Sequelize);
db.Comment = require("./comment")(sequelize, Sequelize);
db.Board = require("./board")(sequelize, Sequelize);
db.Like = require("./like")(sequelize, Sequelize);
db.RefreshToken = require("./refresh_token")(sequelize, Sequelize);
db.Role = require("./role")(sequelize, Sequelize);
db.userRole = require("./user_roles")(sequelize, Sequelize);
>>>>>>> Stashed changes

User.init(sequelize);
Comment.init(sequelize);
Like.init(sequelize);
Board.init(sequelize);

<<<<<<< Updated upstream
User.associate(db);
Comment.associate(db);
Like.associate(db);
Board.associate(db);
=======
db.User.hasMany(db.RefreshToken, { foreignKey: "user_id", tatgetKey: "user_id"});
db.RefreshToken.belongsTo(db.User, { foreignKey: "user_id"});
>>>>>>> Stashed changes

module.exports = db;