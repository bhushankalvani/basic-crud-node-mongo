/**@module {controller} welcomeCtrl - Welcome Page*/
angular.module('phonebook')
	.controller('welcomeCtrl', ['$rootScope','$q','$state','$scope', function($rootScope,$q,$state,$scope){
		console.log('Welcome Controller loaded');

		$scope.enterPB = function(){
			$state.go('user.PB');
		};
	}]);