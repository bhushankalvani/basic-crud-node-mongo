/**
	Configuration file for the angular app.
*/
angular.module('phonebook')
	.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
		/** State Provider to provide states for the app.*/
		$stateProvider
			/** user state */
			.state('user',{
				url : '/user',
				views : {
					'main' : {
						template : '<ui-view></ui-view>',
						controller : function(){}
					}
				}
			})

		$urlRouterProvider.otherwise('/user/');
	}])
	.run(['$rootScope',function($rootScope){
		console.log('PB App running');
		$rootScope.baseUrl = 'http://192.168.0.101:3000/user';
		// console.log($rootScope.baseUrl);
	}]);