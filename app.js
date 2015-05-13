var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var indexController = require('./controllers/index.js');

var Applicant = require ('./models/applicant.js');

mongoose.connect('mongodb://localhost/job');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', indexController.index);
app.get('/applicants', indexController.applicantList);
app.get('/view/:applicantID', indexController.applicantView);
//when clicked calls on id and then runs the controller
//need to set up route before you can go 

app.post('/applicantAdd', indexController.applicantAdd);
app.get('/delete/:applicantID', indexController.applicantDelete);



var server = app.listen(8441, function() {
	console.log('Express server listening on port ' + server.address().port);
});

//use mvc democode for bonus 2