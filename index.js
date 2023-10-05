const express = require('express')
const app = express()
const port = 3000
const axios = require("axios");
var ejs = require("ejs")

const homeCtrl = require('./controller/homeController.js');

app.use(express.static("public"));
app.set("views", "./bind");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    homeCtrl.HomePage(req, res);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})