const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const router = require("./router");
const bodyparser = require("body-parser");
const path = require("path");
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
mongoose
  .connect("mongodb://0.0.0.0:27017/", {
    dbName: "codeRow",
  })

  .then(() => console.log("Connected Successfully"))

  .catch((err) => {
    console.error(err);
  });

app.listen(4000, () => console.log("sever is running on port 4000"));
