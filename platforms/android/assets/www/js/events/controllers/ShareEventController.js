angular.module('ionicApp')
.controller('ShareEventController',function($scope, $cordovaContacts) {
 
		$scope.wanted = [];
    	$cordovaContacts.find({filter: ''}).then(function(result) {

        $scope.contacts = result;
        for (var i=0; i<result.length; i++){
        	wanted[i]= false;
        }
        console.log(result);
    }, function(error) {
        console.log("ERROR: " + error);
    });
 
    
 
});