var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config');
var session = require('express-session');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
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

app.use(favicon(__dirname + '/assets/media/stock/robotron.png'));

app.use(require('webpack-dev-middleware')(compiler, {publicPath: config.output.publicPath}));
app.use(require('webpack-hot-middleware')(compiler));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/session', function(req, res){
	req.currentUser(function(err, user){
    if(user){
      res.send(user);  
    }else{
      res.send(err);
    }
		
	}); 
});

app.post('/days', function(req,res){
  var data = req.body; 
  db.Day.find({'userId':data.id}, function(err, data){
    if(data){
      res.send(data);  
    }else{
      res.send(err);
    }
    
  })
  

}); 

app.post('/today', function(req,res){
  var data = req.body; 
  
  db.Day.find({'userId':data.id,'date':data.date}, function(err, data){
    if(data){
      res.send(data);  
    }else{
      res.send(err); 
    }
    
  })
  

}); 

app.post('/signup', function(req, res){
	var info = req.body; 
	db.User.find({username: info.username}, function(err,user){
		if(user.length === 0){
			db.User.createSecure(info.username, info.password, function(err, user){
        if(user){
          res.send(user);
        }else{
          res.send(err);
        }
			});	
		}else{
      res.send("already in database");
    }
		}
	});
});

app.post('/login', function(req, res){
	var user = req.body;

	db.User.authenticate(user.username, user.password, function(err, user){
    if(user){
      req.login(user);
      res.send(user);  
    }else{
      res.send(err);
    }
	});
});

app.post('/addDay', function(req,res){
  var data = req.body; 
  db.Day.addDay(data.date, data.weight, data.alcohol,data.coffee, data.miles,data.workoutNotes, data.foodNotes, data.id, function(err, day){
    if(day){
      res.send(day);  
    }else{
      res.send(err);
    }
    
  });    
}); 

app.patch('/addDay', function(req,res){
  var data = req.body;
  if(isNaN(parseInt(data.coffee))){
    data.coffee = 0; 
  }

  if(isNaN(parseInt(data.alcohol))){
    data.alcohol = 0;
  }

  if(isNaN(parseInt(data.weight))){
    data.weight = 0;
  }

  data.weight = parseFloat(data.weight).toFixed(2);

  db.Day.update({'userId': data.id, 'date': data.date}, {$set:{weight: data.weight, alcohol: data.alcohol,coffee: data.coffee, miles: data.miles, workoutNotes: data.workoutNotes,foodNotes: data.foodNotes }},{ upsert: true }, function(err,day){
    if(day){
      res.send(day);   
    }else{
      res.send(err);
    }
    
  });       
});    

app.get('/logout', function(req, res){
	req.logout(); 
	res.send('logout finished');
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 3000, function(err) {
  if (err) {
    return console.error(err);
  }
  console.log('Listening at http://localhost:3000/');
})
