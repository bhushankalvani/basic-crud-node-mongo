/**@module {controller} cntctCtrl - Contacts create,read,update,delete operations.*/
angular.module('phonebook')
	.controller('cntctCtrl', ['$rootScope','$q','$scope','$state','usrFactory', function($rootScope,$q,$scope,$state,usrFactory){
		console.log('Contacts Controller loaded');
		/**@var {Array} contacts - to store the array of contacts retrieved from DB for display to user.
		*@var {Array} contactType - types of numbers for the contact, Work,Home,Mobile. 
		*@var {Array} tel - for the contact number storage
		@var {Array} telType - for the contact number type storage*/
		$scope.contacts = [];
		$scope.contactType = ['Mobile','Work','Home','Other','-'];
		$scope.tel = [];
		$scope.telType = [];
		/**@function activate - Very first function to run when this controller called.*/
		activate();
		//function definition
		function activate(){
			/**@param usrFactory - of @module Factory
			*@method getAll - to get all the contacts from the DB and populate the Array*/
			usrFactory.getAll()
				.then(function(success){
					if(success.data.length == 0){
						alert('No contacts in the Phonebook!');
					}
					else{
						angular.forEach(success.data, function(contact, index){
							$scope.contacts.push({
								'_id' : contact._id,
								'name' : contact.name,
								'phonenumbers' : contact.phonenumbers
							});
						});
					}
				},function(err){
					console.log(err);
					alert('Something went wrong! Please try again.');
				});
		};
		/**@method newContact - To add a new Contact to DB.
		*@param contact - Form Object which contains the new contact information params.*/
		$scope.newContact = function(contact){
			/**@var {boolean} disableBtn - To prevent multiple entries of the same object.
			*@var {Array} phoneNum - To create a unified object array containing number along with it's resp. type.*/
			$scope.disableBtn = true;
			var phoneNum = [];
			for(var i = 0; i < $scope.tel.length;i++){
				phoneNum.push({
					number : $scope.tel[i],
					type : $scope.telType[i]
				});
			}
			var newContact = {
				name : contact.name,
				phonenumbers : phoneNum
			};
			// Factory call
			usrFactory.addCntct(newContact)
				.then(function(success){
					// console.log(success);
					if(success.data == 'success'){
						$state.reload();
						$('#addCntctModal').modal('hide');
						$scope.disableBtn = false;
						alert('Contact added successfully');
					}
				},function(err){
					alert('Something went wrong! Please try again.');
				});
		};
		// Remove contact method
		$scope.remContact = function(contact){
			$scope.disableBtn = true;
			// console.log(contact);
			var response = confirm('Remove contact?');
			if(response == true){
				usrFactory.remCntct(contact)
					.then(function(success){
						if(success.data = 'success'){
							$state.reload();
							$scope.disableBtn = false;
							alert('Contact removed successfully');
						}
					},function(err){
						alert('Something went wrong! Please try again.');
					});
			}
			else{/* Fail silently */}
		};
		// Update a contact
		$scope.updateContact = function(contact){
			var newContact = contact;
			// console.log(contact);
			angular.forEach(newContact.phonenumbers, function(numbers, index){
				if(`${numbers.type}` == `-` || `${numbers.number}` == `null`){
					newContact.phonenumbers.splice(index,1);
				}
				// console.log(contact.phonenumbers);				
			});
			$scope.disableBtn = true;
			usrFactory.updCntct(newContact)
				.then(function(success){
					if(success.data == 'success'){
						$state.reload();
						$('#editModal').modal('hide');
						$scope.disableBtn = false;
						alert('Contact updated successfully');
					}
				},function(err){
					alert('Something went wrong! Please try again.');
				});
		};
		// Display contact-info method
		$scope.info = function(contact){
			$scope.selectedContact = contact;
			// var contact_old = contact;
			// console.log(contact);
		};
	}]);