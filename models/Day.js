var bcrypt = require("bcrypt");
var mongoose = require("mongoose");

var daySchema = new mongoose.Schema({
  date: String,
  weight: Number, 
  alcohol: Number, 
  coffee: Number, 
  miles: Number,
  workoutNotes: String, 
  foodNotes: String
});

daySchema.statics.addDay = function(date, weight, alcohol,coffee,miles,workoutNotes,foodNotes, cb){
  	this.create({
	    date: date,
		weight: weight, 
		alcohol: alcohol, 
		coffee: coffee, 
		miles: miles,
		workoutNotes: workoutNotes, 
		foodNotes: foodNotes
    }, cb)
};

var Day = mongoose.model("Day", daySchema);

module.exports = Day;