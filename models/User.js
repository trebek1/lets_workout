var bcrypt = require("bcrypt");
var salt = bcrypt.genSaltSync(10);
var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  email: String,
  passwordDigest: String
});

userSchema.methods.checkPassword = function(password) {
        return bcrypt.compareSync(password, this.passwordDigest);
};

userSchema.statics.createSecure = function (email, password, cb) {
  var that = this;
  bcrypt.genSalt(function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      console.log(hash);
      that.create({
        email: email,
        passwordDigest: hash,
        log: []
       }, cb)
    });
  })
};

userSchema.statics.encryptPassword = function (password) {
   var hash = bcrypt.hashSync(password, salt);
   return hash;
 };


userSchema.statics.authenticate = function(email, password, cb) {
  this.find({
     email: email
    }, 
    function(err, user){

      console.log("this is user ", user); 
      
      if (user.length === 0){
        throw new Error("Username does not exist");
      } else if (user[0].checkPassword(password)){
        cb(null, user[0]);
      }else{
        throw new Error("Error Occured");
      }
    });
 };

var User = mongoose.model("User", userSchema);

module.exports = User;








