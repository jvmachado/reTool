angular.module('starter.controllers', [])

.controller('timeline', function($http,$scope) {
	$scope.refresh = function(){
		return $http.get('http://10.96.127.145:4000/last20')
		.then(function(response) {
			for(obj of response.data){
				dia = new Date(obj.data).getDate();
				atual = new Date().getDate();
				hora = new Date(obj.data).getTime() - new Date().getTime();
				hora = ((hora/3600000)*60)*(-1);
				hora = new Date(hora).getTime();
				if(dia == atual){
					if(hora > 60){
						var res = (hora/60);
						var minuto = res - (hora-(60*res));
						minuto = parseInt(minuto);
						if(res < 10) res = '0'+res;
						if(minuto < 10) res = minuto;		
						obj.postado =res+' h';
					}else{
						if(hora < 1){
							obj.postado = "Agora mesmo"
						}else{
							obj.postado = hora+' min';
						}
					}
				}else{
					obj.postado = new Date(obj.data);
				}
			}
			$scope.indicadores = response.data;			
		});
		
	}
	$scope.refresh();
	$scope.doRefresh = function() {
		setTimeout(function() {
			$scope.refresh().finally(function() {
				$scope.$broadcast('scroll.refreshComplete');
			});
		}, 2000);
		

	};
});
