const { Student } = require("../model/index.js");

// interactive with data --> put in service.js
let studentList = [
  {
    id: 1,
    name: "Anna",
    age: 17,
    numberClass: 11,
  },
  {
    id: 2,
    name: "Hannah",
    age: 18,
    numberClass: 12,
  },
  {
    id: 3,
    name: "Tommy",
    age: 16,
    numberClass: 10,
  },
];
const getListSt = async () => {
  studentList = await Student.findAll();
  if (studentList) {
    return studentList;
  } else {
    return false;
  }
};
const getDetailSt = async (id) => {
  const student = await Student.findOne({
    where: { id },
  });
  console.log(student);
  if (student) {
    return student;
  } else {
    return false;
  }
};
const createSt = async (student) => {
  const newStudent = await Student.create(student);
  studentList = [...studentList, newStudent];
  return newStudent;
};
const updateSt = async (id, name, age, numberClass) => {
  const student = await Student.findOne({
    where: { id },
  });
  if (student) {
    student.name = name;
    student.age = age;
    student.numberClass = numberClass;
    const updatedStudent = await student.save();
    return updatedStudent;
  } else {
    return false;
  }
};
const deleteSt = async (id) => {
  const student = await getDetailSt(id);
  if (student) {
    await Student.destroy({
      where: { id },
    });
    return student;
  } else {
    return false;
  }
};

module.exports = { getListSt, getDetailSt, createSt, updateSt, deleteSt };
