require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Products = require("./models/productSchema");
require("../server/db/Connection");

const DefaultData = require("./defaultdata");
const cors = require('cors');
const route = require("./routes/router");

const app = express();
app.use(express.json());

app.use(route);

const port = 8085;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

DefaultData();
