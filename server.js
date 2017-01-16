var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config');
var session = require('express-session');
var bodyParser = require('body-parser');
var db = require('./models');
var app = express();
var compiler = webpack(config);

//create session 
app.use(session({
	secret: "super secret",
	resave: false,
	saveUninitialized: true
}));

// create idea of logged in user 
app.use("/", function (req, res, next) {

  req.login = function (user) {
    req.session.userId = user._id;
    req.session.username = user.email;
    req.session.save();  
  };

  req.currentUser = function (cb) {
     db.User.
      findOne({
          _id: req.session.userId
      },
      function (err, user) {
        req.user = user;
        cb(null, user);
      })
  };

  req.logout = function () {
  	req.session.destroy();
  }
  next(); 
});

app.use(require('webpack-dev-middleware')(compiler, {publicPath: config.output.publicPath}));
app.use(require('webpack-hot-middleware')(compiler));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/session', function(req, res){
	req.currentUser(function(err, user){
		res.send(user);
	}); 
}); 

app.post('/signup', function(req, res){
	var info = req.body; 
	db.User.find({email: info.username}, function(err,user){
		if(user.length === 0){
			db.User.createSecure(info.username, info.password, function(err, user){
			});	
		}else{
			console.log("already in database");
		}
	});
});

app.post('/login', function(req, res){
	var user = req.body;

	db.User.authenticate(user.username, user.password, function(err, user){
		req.login(user);
		res.send('logged in!');
	});
});

app.post('/addDay', function(req,res){
  var data = req.body; 
  
  db.Day.addDay(data.date, data.weight, data.alcohol,data.coffee, data.miles,data.workoutNotes, data.foodNotes, data.id, function(err, day){
    console.log("one day added ", day); 
    res.send('Day Added');
  });
    
}); 

app.patch('/addDay', function(req,res){
  
});

app.get('/logout', function(req, res){
	req.logout(); 
	res.send('logout finished');
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
