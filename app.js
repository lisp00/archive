
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
//  , db = require('./routes/db') 
  , http = require('http')
  , path = require('path')
  , methodOverride = require('method-override')
  , main = require('./routes/main')
  , title = require('./routes/title')
  , signup = require('./routes/signup')
  , ediinfo = require('./routes/editinfo')
  , board_view = require('./routes/board_view')
  , board_write = require('./routes/board_write')
  , board_edit = require('./routes/board_edit')
  , board_delete = require('./routes/board_delete');

var ejs = require('ejs');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
//app.get('/db', db.list);
app.get('/main', main.list);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
