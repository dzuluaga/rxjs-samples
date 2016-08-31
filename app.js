var Rx = require('rx');

var subject = new Rx.Subject();

var subscription = subject.subscribe(
    function (x) {
        console.log('Next: ' + x.toString());
    },
		function(y) {
				console.log('no se ' + y);
		},
    function (err) {
        console.log('Error: ' + err);
    },
    function () {
        console.log('Completed');
    });

subject.onNext(42);

// => Next: 42

subject.onNext(56);

// => Next: 56

subject.onCompleted();
