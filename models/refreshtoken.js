module.exports =(sequelize, Datatypes) => {  
    return sequelize.define("refreshtoken", {  
      id: {  
          type: Datatypes.BIGINT, 
          allowNull: false, 
          autoIncrement: true, 
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
    },  
    {  
      sequelize,  
      timestamps: false,  
      modelName: 'refreshtoken',  
      tableName: 'refreshtoken',  
      paranoid: false,  
      charset: 'utf8',  
      collate: 'utf8_general_ci',  
    })  
  }