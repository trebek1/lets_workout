var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config');
var session = require('express-session');
var bodyParser = require('body-parser');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json({ type: 'application/json' }))

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
	console.log("this is req ", req.body);
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
