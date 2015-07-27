var mysql = require('mysql');
var options = {
		host:'118.32.162.64',
		port:3306,
		user:'root',
		password:'wd052300',
		database:'test'
};
var connection = mysql.createConnection(options);


exports.signup = function(req, res){
  res.send("signup method");
};