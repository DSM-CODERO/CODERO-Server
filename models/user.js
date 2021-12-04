const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
      return super.init({
        user_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        password: {
            type: Sequelize.STRING(20),
            unique: false,
        },
        nickname: {
            type: Sequelize.STRING(10),
            unique: true,
        },
        email: {
            type: Sequelize.STRING(45),
            unique: true,
        }
      }, {
        sequelize,
        underscored: false, 
        modelName: 'User',
        tableName: 'users',
        timestamps: false,
        paranoid: false, 
        charset: 'utf8',
        collate: 'utf8_general_ci',
      });
    }

    static associate(db) {
      db.User.hasMany(db.Like, { foreignKey: "user_id", sourceKey: "user_id" });
      db.User.hasMany(db.Comment, { foreignKey: "user_id", sourceKey: "user_id" });
      db.User.hasMany(db.Board, { foreignKey: "user_id", sourceKey: "user_id" });
      db.User.hasMany(db.Board, {foreignKey: "nickname", sourceKey: "nickname"});
    }
}