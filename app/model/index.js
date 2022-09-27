const { Sequelize, DataTypes } = require("sequelize");
const { HOST, USER, PASSWORD, DB, dialect } = require("../configs/dbConfig");
const { createStudent } = require("./studentModel");
// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: dialect,
});
// Student model
const Student = createStudent(sequelize);
module.exports = {
  sequelize,
  Student,
};
