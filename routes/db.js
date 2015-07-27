var mysql = require('mysql');
var options = {
		host:'118.32.162.64',
		port:3306,
		user:'root',
		password:'wd052300',
		database:'archive'
};

var sql = "select * " +
		  "from board ";
var result = 'row \t board_id \t author_uuid</br>';

var connection = mysql.createConnection(options);

exports.list = list(function() {
	res.send(result);
});


function list(req, res) {
	connection.query(sql, function(err, rows, fields) {
		if(err) {
			console.log(err);
			connection.end(function() {
				console.log('database close'); 
			});
		} else {
			rows.forEach(function(row, i) {
				console.log(i+' : '+row.board_id + ' ' + row.author_uuid);
				result += i+' : '+row.board_id + ' ' + row.author_uuid + '</br>';
				if(i==(rows.length -1)) {
					connection.end(function() {
						console.log("database close");
					});
				}
			});
		}
	});
}