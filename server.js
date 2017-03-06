
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var massive = require('massive');
var config = require('./config');


var app = module.exports = express();
app.use(express.static('./'));
app.use(bodyParser.json());
app.use(session({secret: config.secret}));

var massiveUri = config.MASSIVE_URI;
var massiveServer = massive.connectSync({
  connectionString: massiveUri
});
app.set('db', massiveServer);
var db = app.get('db');

var dbSetup = require('./server/services/dbSetup');
dbSetup.run();



var passport = require('./server/services/passport');
app.use(passport.initialize());
app.use(passport.session());
app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback', passport.authenticate('auth0', {
  successRedirect: '/#!/',
  failureRedirect: '/auth'
}));
app.get('/api/logout', function(req, res, next) {
	req.logout();
	return res.status(200)
		.send('logged out');
});

var isAuthed = function(req, res, next) {
	if (!req.isAuthenticated()) return res.status(401)
		.send();
	return next();
};

app.get('/auth/me', function(req, res, next) {
  if (!req.user)
    return res.status(404).send('User not found');
  res.status(200).send(req.user);
});



var serverCtrl = require('./server/serverCtrl');


app.get('/api/Running/:username', serverCtrl.myRuns);
app.get('/api/Running/:date', serverCtrl.getOneRun);
app.post('/api/Running', serverCtrl.createRun);
app.put('/api/Running/:date', serverCtrl.updateRun);
app.delete('/api/Running/:date', serverCtrl.deleteRun);

app.get('/api/MainWorkout/:userId', serverCtrl.mySwoleSessions);
app.get('/api/MainWorkout/:date', serverCtrl.oneTimeSwole);
app.post('/api/MainWorkout/', serverCtrl.logSwoleSesh);
app.put('/api/MainWorkout/:date', serverCtrl.seshDeets);
app.delete('/api/MainWorkout/:date', serverCtrl.deleteSesh);

app.get('/api/Biking/:userName', serverCtrl.getBikeRides);
app.get('/api/Biking/:date', serverCtrl.getOneRide);
app.post('/api/Biking', serverCtrl.createBike);
app.put('/api/Biking/:date', serverCtrl.updateBikeRide);
app.delete('/api/Biking/:date', serverCtrl.deleteBikeRide);

app.post('/api/perExercise', serverCtrl.logLift);


var port = config.port;
app.listen(port, function() {
  console.log('listening on port ', port);
});
