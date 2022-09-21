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
const getListSt = () => {
  if (studentList) {
    return studentList;
  } else {
    return false;
  }
};
const getDetailSt = (id) => {
  const index = studentList.findIndex((student) => student.id == id);
  if (index !== -1) {
    const student = studentList[index];
    return student;
  } else {
    return false;
  }
};
const createSt = (req, res) => {
  const newStudent = {
    id: Math.random(),
    ...req.body,
  };
  studentList = [...studentList, newStudent];
  return newStudent;
};
const updateSt = (id, name, age, numberClass) => {
  const index = studentList.findIndex((student) => student.id == id);
  if (index !== -1) {
    const oldStudent = studentList[index];
    const updatedStudent = { ...oldStudent, name, age, numberClass };
    studentList[index] = updatedStudent;
    return updatedStudent;
  } else {
    return false;
  }
};
const deleteSt = (id) => {
  const index = studentList.findIndex((student) => student.id == id);
  if (index !== -1) {
    const deletedStudent = studentList[index];
    studentList = studentList.filter(
      (student) => student.id.toString() !== id.toString()
    );
    // studentList.splice(index,1);
    return deletedStudent;
  } else {
    return false;
  }
};

module.exports = { getListSt, getDetailSt, createSt, updateSt, deleteSt };
