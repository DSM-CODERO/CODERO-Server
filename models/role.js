module.exports =(sequelize, Datatypes) => {
  return sequelize.define("role", {
    id: {
      type: Datatypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: { 
      type: Datatypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'Role',
    tableName: 'roles',
    paranoid: false,
    charset: 'utf8',
  })
}
