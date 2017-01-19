var express = require('express');
var config = require('./config');
var create_contest = require('./rpc');
var moment = require('moment');
var util = require('util');
var EventEmitter = require('events').EventEmitter
var _ = require('underscore');
var lib = require('./lib');
var app = express();

// Set Global Variables
app.next_contest = '2017-01-18 07:55';
app.contest_interval = 3;
//if app.contest_interval = 3 then [ 0, 3, 6, 9, 12, 15, 18, 21 ]
var hour_set = _.range(0, 24, app.contest_interval); 

util.inherits(app, EventEmitter);
require('./express')(app);

app.listen(process.env.PORT || config.port);

var timer = setInterval(function(){
	return app.emit("ticktock");
}, 1000);

var done = false;
app.on('ticktock', function(){
	if(!app.contest_interval) return;
	var now = moment(moment.now()).clone();
	if(now.minute() >= 59 && now.second() >= 55){
		if(done) return
		done = true
		var now = moment(moment.now()).clone().hour();
		var nextHour = lib.getUpperHour(hour_set, now);
		if( (nextHour - 1) != now) return;
		create_contest(function(error, response){
			if(error){
				app.emit('create_contest_error', error);
			}else{
				app.emit('createst_created', response);
			}
		});
	}else{
		done = false;
	}
});

app.on('ticktock', function(){
	if(!app.contest_interval) return;
	var nextHour = lib.getUpperHour(hour_set, 
		moment(moment.now()).hour());
	var now = moment(moment.now()).clone();
	app.next_contest = now.year() + '-' + now.month() + 1 + '-' + now.date() + ' ' + nextHour + ':00:' + '00';
});

app.on('createst_created', function(response){
	console.log(response);
});

app.on('create_contest_error', function(error){
	console.log(error);
});

