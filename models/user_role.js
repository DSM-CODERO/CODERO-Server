module.exports =(sequelize, Datatypes) => { 
    return sequelize.define("user_role", { 
      users_id: { 
        type: Datatypes.INTEGER, 
        allowNull: false, 
        primaryKey: true, 
      }, 
      roles_id: {  
        type: Datatypes.INTEGER, 
        allowNull: false, 
      } 
    }, 
    { 
      sequelize, 
      timestamps: false, 
      modelName: 'User_role', 
      tableName: 'user_roles', 
      paranoid: false, 
      charset: 'utf8', 
      collate: 'utf8_general_ci', 
    }) 
  } 