const express = require("express");
const app = express();
const port = 3000;
const router = require("./routers/rootRouter");
// modify req, res to JSON
app.use(express.json());

//router
app.use(router);

app.listen(port, () => console.log("server running on port " + port));
