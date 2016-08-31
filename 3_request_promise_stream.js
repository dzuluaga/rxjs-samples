var Rx = require('rx'),
		request = require('request');

var p = new Promise(function(resolve, reject) {
		request({uri: 'https://api.github.com/users', headers: {'User-Agent': 'Node'}}, function(err, response, body) {
		if (err) {
			reject(err);
		}
		resolve({response: response, body: body});
	});
});

p
	.then(function (data) {
		console.log(data.body);
	})
	.catch(function (err) {
		console.log(err);
	});


//
//var requestStream = Rx.Observable.just('https://api.github.com/users');
//
//requestStream.subscribe(
//	function(url) {
//		var responseStream = Rx.Observable.create(function (observer) {
//			request({uri: url, headers: {'User-Agent': 'Node'}}, function(err, response, body) {
//				if (err) {
//					observer.onError(err);
//			 	}
//				observer.onNext({response: response, body: body});
//				observer.onCompleted();
//			});			
//		});
//		responseStream.subscribe(function(resp) {
//			//console.log('resp: ' + JSON.stringify(resp));
//			console.log('body: ' + resp.body);
//		});
//	});
//


