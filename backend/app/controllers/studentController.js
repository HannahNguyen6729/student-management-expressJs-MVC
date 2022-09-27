const {
  getListSt,
  getDetailSt,
  createSt,
  updateSt,
  deleteSt,
} = require("../services/studentService");

const getStudentListController = async (req, res) => {
  const studentList = await getListSt();
  if (studentList) {
    res.status(200).send(studentList);
  } else {
    res.status(404).send("NOT FOUND");
  }
};

const getDetailStudentcontroller = async (req, res) => {
  const { id } = req.params;
  const student = await getDetailSt(id);
  if (student) {
    res.status(200).send(student);
  } else {
    res.status(404).send("NOT FOUND");
  }
};
const createStudentController = async (req, res) => {
  let student = req.body;
  const newStudent = await createSt(student);
  res.status(201).send(newStudent);
};
const updatedStudentController = async (req, res) => {
  const { id } = req.params;
  const { name, age, numberClass } = req.body;
  const updatedStudent = await updateSt(id, name, age, numberClass);
  if (updatedStudent) {
    res.status(200).send(updatedStudent);
  } else {
    res.status(404).send("NOT FOUND");
  }
};
const deletedStudentController = async (req, res) => {
  const { id } = req.params;
  const deletedStudent = await deleteSt(id);
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
