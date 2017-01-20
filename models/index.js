// models/index.js
var mongoose = require("mongoose");
//mongoose.connect("mongodb://localhost:27017/workout");
var url = process.env.MONGOLAB_URI;

mongoose.connect(url);

module.exports.User = require("./User");
module.exports.Day = require("./Day");

