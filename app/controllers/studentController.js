const {
  getListSt,
  getDetailSt,
  createSt,
  updateSt,
  deleteSt,
} = require("../services/studentService");

const getStudentListController = (req, res) => {
  const studentList = getListSt();
  if (studentList) {
    res.status(200).send(studentList);
  } else {
    res.status(404).send("NOT FOUND");
  }
};

const getDetailStudentcontroller = (req, res) => {
  const { id } = req.params;
  const student = getDetailSt(id);
  if (student) {
    //console.log(student);
    res.status(200).send(student);
  } else {
    res.status(404).send("NOT FOUND");
  }
};
const createStudentController = (req, res) => {
  const newStudent = createSt(req, res);
  res.status(201).send(newStudent);
};
const updatedStudentController = (req, res) => {
  const { id } = req.params;
  const { name, age, numberClass } = req.body;
  const updatedStudent = updateSt(id, name, age, numberClass);
  if (updatedStudent) {
    res.status(200).send(updatedStudent);
  } else {
    res.status(404).send("NOT FOUND");
  }
};
const deletedStudentController = (req, res) => {
  const { id } = req.params;
  const deletedStudent = deleteSt(id);
  if (deletedStudent) {
    res.status(200).send(deletedStudent);
  } else {
    res.status(404).send("NOT FOUND");
  }
};

module.exports = {
  getStudentListController,
  getDetailStudentcontroller,
  createStudentController,
  updatedStudentController,
  deletedStudentController,
};
