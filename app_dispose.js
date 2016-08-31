var Rx = require('rx');

var subject = new Rx.ReplaySubject();

var subscription = subject.subscribe(
    function (x) {
        console.log('Next: ' + x.toString());
    },
    function (err) {
        console.log('Error: ' + err);
    },
    function () {
        console.log('Completed');
    });

subject.onNext(42);
// => Next: 42

subject.subscribe(
		function (x) {		
			console.log('Next2: ' + x.toString());
		},
		function (err) {
			console.log('Error2: ' + err);
		},
		function () {
			console.log('Completed 2');
		});

subject.onNext(100);


subject.onCompleted();
// => Completed

subject.dispose();

try {
    subject.onNext(56);
} catch (e) {
    console.log(e.message);
}

// => Object has been disposed
