const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const router = require("./routers/rootRouter");
app.use(cors());
// modify req, res to JSON
app.use(express.json());

//router
app.use(router);

//set up sequelize
const { sequelize } = require("./model/index");
sequelize.sync({ alter: true });

//checking connection
const checkConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
checkConnection();

app.listen(port, () => console.log("server running on port " + port));
