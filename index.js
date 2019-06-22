var schedule = require('node-schedule');

var job1 = schedule.scheduleJob('42 * * * *', function(){
  console.log('The answer to life, the universe, and everything!');
});


var job2 = schedule.scheduleJob('0 1 * * *', function(fireDate){
  console.log('This job was supposed to run at ' + fireDate + ', but actually ran at ' + new Date());
});


// Date-based Scheduling

var schedule = require('node-schedule');
var date = new Date(2019, 06, 15, 12, 30, 0);

var job3 = schedule.scheduleJob(date, function(){
  console.log('The world is going to end today.');
});


// RecurrenceRule
var rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [0, new schedule.Range(4, 6)];
rule.hour = 17;
rule.minute = 0;

var job4 = schedule.scheduleJob(rule, function(){
  console.log('Today is recognized by Rebecca Black!');
});


// Object Literal Syntax

var job5 = schedule.scheduleJob({hour: 12, minute: 30, dayOfWeek: 0}, function(){
  console.log('Time for tea!');
});

// Set StartTime and EndTime

let startTime = new Date(Date.now() + 5000);
let endTime = new Date(startTime.getTime() + 5000);
var job5 = schedule.scheduleJob({ start: startTime, end: endTime, rule: '*/1 * * * * *' }, function(){
  console.log('Set StartTime and EndTime');
});


//Handle Jobs and Job Invocations
	//You can invalidate any job with the cancel() method:

job5.cancel();