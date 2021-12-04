const Sequelize = require('sequelize');

module.exports = class Like extends Sequelize.Model {
    static init(sequelize) {
      return super.init({
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        board_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
      }, {
        sequelize,
        underscored: false,
        modelName: 'Like',
        tableName: 'likes',
        timestamps: false,
        paranoid: false, 
        charset: 'utf8',
        collate: 'utf8_general_ci',
      });
    }
    static associate(db) {
      db.Like.belongsTo(db.Board, { foreignKey: 'board_id', targetKey: 'board_id' });
      db.Like.belongsTo(db.User, { foreignKey: 'user_id', targetKey: 'user_id' });
    }
}