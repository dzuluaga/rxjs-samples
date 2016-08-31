var Rx = require('rx');

var requestStream = Rx.Observable.just('https://api.github.com/users');

requestStream.subscribe(
	function(url) {
		console.log(url);
	},
	function(err) {
		console.log(err);
	},
	function() {
		console.log('done');
	}
);

