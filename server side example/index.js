// this would make more sense with file reads, but I'm just trying to illustrate how it would be written
// in order to illustrate how this works I will be using a settimeout to pause the loop for one second each iteration

var async = require('async');

// get array of things to loop over
var myArray = ['The Joker', 'Darth Vader', 'Hannibal Lecter', 'Anton Chigurh', 'Nurse Ratched', 'Jack Torrance', 'Amon Goeth', 'Mr. Potter', 'Agent Smith'];

// pass the array to async
async.eachSeries(myArray, function(character, callback) {

	setTimeout(function() {
		console.log(character)
		callback();
	}, 1000)

}, function(err) {

	console.log('all characters shown');

}); 