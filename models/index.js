// models/index.js
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/workout");

module.exports.User = require("./User");
module.exports.Day = require("./Day");

