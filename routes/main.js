var mysql = require('mysql');
var dbconfig = require('../config/database');

var sql = "select * " +
		  "from board ";
var result = '';

var connection = mysql.createConnection(dbconfig);

exports.list = func;

function func(req, res) {
	connection.query(sql, function(err, rows, fields) {
		if(err) {
			console.log(err);
			connection.end(function() {
				console.log('database close'); 
			});
		} else {
			rows.forEach(function(row, i) {
				//console.log(i+':'+row.board_id + '  ' + row.author_uuid);
				result += i+':'+row.board_id + '  ' + row.author_uuid;
				if(i==(rows.length -1)) {
					res.send(result.toString());
					result = '';
				}
			});
		}
	});
	
};