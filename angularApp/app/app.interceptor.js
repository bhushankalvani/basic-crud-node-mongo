angular.module('phonebook')
	.factory('PBInterceptor', ['$q', function($q){
		var PBInterceptor = {
			// On request success
			request : function (config) {
				return config || $q.when(config);	
			},
			// On request failure
			requestError : function(rejection) {
				console.log(rejection);
				return $q.reject(rejection);
			},
			// On response success
			response : function (response){
				return response || $q.when(response);
			},
			// On response failure
			responseError : function(rejection){
				if(rejection.status == 401){
					window.location('http://localhost:8082/Pristine%20Fire/phonebook/#!/');
				}
				return $q.reject(rejection);
			}
		};

		return PBInterceptor;
	}]);

angular.module('phonebook').config(['$httpProvider', function($httpProvider){
	$httpProvider.interceptors.push('PBInterceptor');
}]);