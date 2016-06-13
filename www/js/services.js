angular.module('starter.services', [])

.factory('cadastrarDeviceService', function($http) {
	return {
		cadastrarDevice: function(token,device){
			var data = {
				token: token,
				device: device
			}

			var url = "http://10.96.127.144:4000/device";

			var req = {
				method: 'POST',
				url: url,				   
				data: data
			}

			$http(req).then(function sucessCallback(response){
          			return response;		
          			console.log("cadastrou device");
          		}, function errorCallback(response){
          			console.log(response);
          		});
		}
	}
})