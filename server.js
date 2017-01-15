var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config');
var session = require('express-session');
var bodyParser = require('body-parser');
var db = require('./models');
var app = express();
var compiler = webpack(config);

app.use(session({
	secret: "super secret",
	resave: false,
	saveUninitialized: true
}));

// db.User.createSecure("bill", "foobar", function(err, user){
// 	console.log("success!", user);
// 	var id = user._id; 	
// 	console.log("this is id ", id); 
// 	db.Day.addDay('1/1/2015', 205, 1,1,1,"none","good food",id, function(err,day){
// 		console.log("day added ", day, err); 
// 	});	


// });
 //(date, weight, alcohol,coffee,miles,workoutNotes,foodNotes, cb) {



//var MongoClient = require('mongodb').MongoClient

// Connection URL
//var url = 'mongodb://localhost:27017/workout';

// Use connect method to connect to the server
// MongoClient.connect(url, function(err, db) {
  
//   console.log("Connected successfully to server");
//   var myCursor = db.collection('users').find({}); 
//   	while (myCursor.hasNext()) {
//    		print(tojson(myCursor.next()));
// }
//   console.log(workout)

//   db.close();
// });


app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

// app.use('*', function(req,res){ 
// 	res.header("Access-Control-Allow-Origin", "*"); 
// 	res.header("Access-Control-Allow-Credentials", "true"); 
// 	res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT"); 
// 	res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"); 
// });

app.get('/api', function(req, res){
	res.json({
		'alex': {
			'was': 'here'
		},
		'ian': {
			'is' : 'developer'
		}
	});
});

app.post('/signup', function(req, res){
	
	var info = req.body; 
	db.User.find({email: info.username}, function(err,user){
		
		if(user.length === 0){
			db.User.createSecure(info.username, info.password, function(err, user){
				console.log("success!", user);
			});	
		}else{
			console.log("already in database");
		}
		
	});
	


});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(3000, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
})
