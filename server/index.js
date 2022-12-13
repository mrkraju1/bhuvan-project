const express = require("express");
const app = express();
const router = require("./src/route/route");
require("./src/config/dbconfig");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/sample", router);

const port = 7800;
app.listen(port, () => {
  console.log(`server is on port ${port}`);
});


