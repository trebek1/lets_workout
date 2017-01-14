var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
  username: String, 
  password: String  
});

