var Rx = require('rx');

var subject = new Rx.Observable.just('12345');

subject.subscribe(
	function (data) {
		console.log(data);
	},
	function (err) {
		console.log(err);
	},
	function () {
		console.log('completed');
	}
);
