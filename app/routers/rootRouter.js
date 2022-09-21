const express = require("express");
const rootRouter = express.Router();
const studentRouter = require("./studentRouter");

rootRouter.use("/students", studentRouter);
module.exports = rootRouter;
