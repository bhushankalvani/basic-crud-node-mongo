/** @module {factory} usrFactory*/
angular.module('phonebook')
	.factory('usrFactory', ['$http','$rootScope','$q', function($http,$rootScope,$q){
		var obj = {};
			// To get all contacts.
			obj.getAll = function(){
				var defer = $q.defer();
				// console.log($rootScope.baseUrl + '/listall');
				$http.get($rootScope.baseUrl + '/listall')
					.then(function(success){
						defer.resolve(success);
					},function(err){
						defer.reject(err);
					});
				return defer.promise;
			};
			// To add a new contact.
			obj.addCntct = function(contact){
				var defer = $q.defer();
				// console.log(contact);
				$http.post($rootScope.baseUrl + '/add', contact)
					.then(function(success){
						defer.resolve(success);
					},function(err){
						defer.reject(err);
					});
				return defer.promise;
			};
			// To update a contact
			obj.updCntct = function(contact){
				var defer = $q.defer();
				$http.post($rootScope.baseUrl + '/update', contact)
					.then(function(success){
						defer.resolve(success);
					},function(err){
						defer.reject(err);
					});
				return defer.promise;
			};			
			// To remove a contact
			obj.remCntct = function(contact){
				var defer = $q.defer();
				$http.post($rootScope.baseUrl + '/remove', contact)
					.then(function(success){
						defer.resolve(success);
					},function(err){
						defer.reject(err);
					});
				return defer.promise;
			};

		return obj;
	}])