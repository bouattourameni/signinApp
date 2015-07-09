<<<<<<< HEAD
angular.module('ionicApp').controller('AddEventController', ['EventService','$scope',
function($scope,EventService){
 _this = this;
 $scope.title = '';
 $scope.description = '',
 $scope.type = '',
 $scope.date = ''
  

this.saving = function() { 
  	setTitle(_this.title);
  	setDescription(_this.description);
  	setType(_this.type);
  	setAddress(document.getElementById('address').value);
  	setDate(_this.date);
  	createEvent(getEvent());

  }

=======
angular.module('ionicApp').controller('AddEventController', ['EventService', function () {
    this.addEvent = {
        title: '123',
        description: '',
        type: '',
        date: ''
    };
    save = function () {
        setTitle(addEvent.title);
        console.log(getTitle());

    };
    return true;
>>>>>>> origin/master
}
]);
