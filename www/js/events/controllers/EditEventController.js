angular.module('ionicApp').controller('EditEventController', ['EventService','$scope',
function($scope,EventService){
 _this = this;
 $scope.title = '';
 $scope.description = '',
 $scope.type = '',
 $scope.date = ''
  

this.editing = function() { 
  	setTitle(_this.title);
  	setDescription(_this.description);
  	setType(_this.type);
  	setAddress(document.getElementById('address').value);
  	setDate(_this.date);
  	createEvent(getEvent());

  }
}

]);