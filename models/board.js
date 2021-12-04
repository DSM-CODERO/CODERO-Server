const Sequelize = require('sequelize');

module.exports = class Board extends Sequelize.Model {
    static init(sequelize) {
      return super.init({
        board_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        context: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        title: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        nickname: {
          type: Sequelize.STRING(10),
          allowNull: false,
        },
        picture: {
            type: Sequelize.STRING(),
            allowNull: true,
        },
        filed: {
            type: Sequelize.STRING(10),
            allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
      }, {
        sequelize,
        underscored: false,
        modelName: 'Board',
        tableName: 'boards',
        timestamps: false,
        paranoid: false, 
        charset: 'utf8',
        collate: 'utf8_general_ci',
      });
    }

    static associate(db) {
      db.Board.belongsTo(db.User, { foreignKey: 'user_id', sourceKey: 'user_id' });
      db.Board.belongsTo(db.User, { foreignKey: "nickname", targetKey: "nickname" });
      db.Board.hasMany(db.Like, { foreignKey: 'board_id', targetKey: 'board_id' });
      db.Board.hasMany(db.Comment, { foreignKey: 'board_id', targetKey: 'board_id' });
    };
}