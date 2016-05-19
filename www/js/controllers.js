angular.module('starter.controllers', [])

.controller('timeline', function($http,$scope) {
	$http.get("http://localhost:4000/last20").then(function(response) {
		$scope.indicadores = response.data;
		console.log(response.data);
	});
});
