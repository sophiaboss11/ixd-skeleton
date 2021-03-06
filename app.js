
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
// Example route
// var user = require('./routes/user');
//var wallr = require('createwall');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

//routes
//app.get("/user/:id", user.view);
//app.get("/views/createwall.html");
//app.get('/views/createwall.html');
//example: app.get("someurl/:someid, controller.get_action");
//app.get('/', index.view);

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/createwall', function(req, res) {
    res.render('createwall');
});

app.get('/community', function(req, res) {
    res.render('community');
});

app.get('/gallery', function(req, res) {
    res.render('gallery');
});

app.get('/tutorial', function(req, res) {
    res.render('tutorial');
});

app.get('/settings', function(req, res) {
    res.render('settings');
});

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
