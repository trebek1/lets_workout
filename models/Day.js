var bcrypt = require("bcrypt");
var mongoose = require("mongoose");

var daySchema = new mongoose.Schema({
  date: String,
  weight: Number, 
  alcohol: Number, 
  coffee: Number, 
  miles: Number,
  workoutNotes: String, 
  foodNotes: String, 
  userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

daySchema.statics.addDay = function(date, weight, alcohol,coffee,miles,workoutNotes,foodNotes,id,cb){
  if(coffee === "Coffee"){
    coffee = 0; 
  }

  if(alcohol === "Number of Drinks"){
    alcohol = 0; 
  }
  	this.create({
	    date: date,
		weight: weight, 
		alcohol: alcohol, 
		coffee: coffee, 
		miles: miles,
		workoutNotes: workoutNotes, 
		foodNotes: foodNotes, 
		userId: id
    }, cb)
};

var Day = mongoose.model("Day", daySchema);

module.exports = Day;