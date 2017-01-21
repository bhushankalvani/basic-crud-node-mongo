angular.module('phonebook')
	.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){
		$stateProvider
			// Greeting State
			.state('user.main',{
				url : '/',
				templateUrl : 'user/view/welcome.html',
				controller : 'welcomeCtrl'
			})
			// Phonebook Display State
			.state('user.PB',{
				url : '/contacts',
				templateUrl : 'user/view/displayContacts.html',
				controller : 'cntctCtrl'
			})
	}]);