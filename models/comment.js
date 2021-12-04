const Sequelize = require('sequelize');

module.exports = class Comment extends Sequelize.Model {
    static init(sequelize) {
      return super.init({
        comment_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        board_id: {
          type: Sequelize.INTEGER,
        },
        user_id: {
          type: Sequelize.INTEGER,
        },
        context: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        reply_comment_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        picture: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        // isDeleted: {
        //   type: Sequelize.BOOLEAN,
        // },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
        // updated_at: {
        //   type: Sequelize.DATE,
        //   allowNull: false,
        // },
      }, {
        sequelize,
        underscored: false,
        modelName: 'Comment',
        tableName: 'comments',
        timestamps: false,
        paranoid: false, 
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      });
    }

    static associate(db) {
      db.Comment.belongsTo(db.Board, { foreignKey: 'board_id', targetKey: 'board_id' });
      db.Comment.belongsTo(db.User, { foreignKey: 'user_id', targetKey: 'user_id' });
    }
}