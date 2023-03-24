const express = require("express");
const app = express.Router();
const { getproduct } = require("../controllers/product.controller");

app.get("/getproduct", getproduct);

module.exports = app;
