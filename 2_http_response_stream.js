var Rx = require('rx'),
		request = require('request');

var requestStream = Rx.Observable.just('https://api.github.com/users');

requestStream.subscribe(
	function(url) {
		var responseStream = Rx.Observable.create(function (observer) {
			request({uri: url, headers: {'User-Agent': 'Node'}}, function(err, response, body) {
				if (err) {
					observer.onError(err);
			 	}
				observer.onNext({response: response, body: body});
				observer.onCompleted();
			});			
		});
		responseStream.subscribe(function(resp) {
			//console.log('resp: ' + JSON.stringify(resp));
			console.log('body: ' + resp.body);
		});
	});


