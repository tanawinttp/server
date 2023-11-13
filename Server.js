const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");

//import Config
const connectDB = require("./Config/db");

//import Routes
const routesAPI = require("./Routes/api");

const app = express();

require("dotenv").config();

connectDB();

// middleware
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "20mb" }));
app.use(cors());

app.use(routesAPI);

const PORT = "3000";
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
