const express = require("express");
const studentRouter = express.Router();
const {
  getStudentListController,
  getDetailStudentcontroller,
  createStudentController,
  updatedStudentController,
  deletedStudentController,
} = require("../controllers/studentController");
const {
  logFeatureMiddleware,
  anotherMiddleware,
} = require("../middlewares/logger/logger");
const {
  checkEmpty,
  checkNumberClass,
} = require("../middlewares/validation/studentValidation");
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

//get all students
studentRouter.get(
  "/",
  logFeatureMiddleware,
  anotherMiddleware,
  getStudentListController
);

//get a detail student
studentRouter.get("/:id", getDetailStudentcontroller);
//create a new student
studentRouter.post("/", checkEmpty, checkNumberClass, createStudentController);

//update a student
studentRouter.put("/:id", updatedStudentController);

//delete a student
studentRouter.delete("/:id", deletedStudentController);

module.exports = studentRouter;
