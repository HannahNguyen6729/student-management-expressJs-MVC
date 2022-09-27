const { DataTypes } = require("sequelize");

//create a method
const createStudent = (sequelize) => {
  return sequelize.define(
    //model name
    "Students",
    {
      //model attributes are defined here
      name: {
        type: DataTypes.STRING,
        alowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      numberClass: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      //other model options go here
      tableName: "Students",
      timestamps: true,
    }
  );
};
module.exports = { createStudent };
