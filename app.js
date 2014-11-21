
/**
 * Module dependencies.
 */



var express = require('express');
var routes = require('./routes');
var MongoStore = require('connect-mongo')(express);
// var article = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
//app.get('/users', user.list);
app.get('/quizlist', routes.quizlist);
app.get('/admin', routes.admin);
app.post('/quiz', routes.gradequiz);
app.get('/quiz/:name', routes.quiz);
app.post('/quizform', routes.createquiz);
app.get('/quizform', routes.quizform);
app.post('/articleform', routes.createarticle);
app.get('/articleform', routes.articleform);
app.get('/article/:name', routes.article);

app.get('/create', routes.create);
app.get('/quiz1', routes.quiz1);
app.get('/helpfulsites', routes.helpfulsites);
app.get('/update', routes.update);
app.get('/guesstheanimal', routes.guesstheanimal);
app.post('/guesstheanimal', routes.guesstheanimalsubmit);
app.get('/articles', routes.articles);
app.get('/drop', routes.drop);
app.get('/list', routes.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
