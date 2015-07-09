angular.module('ionicApp')

.controller('DetailController', ['$scope','$http', '$state','EventService',
  function($scope, $http, $state) {

    $scope.events = getListEvent();
      $scope.event = {
        title : '',
        description : '',
        type : '',
        address : ''

      }
      $scope.whichEvent=$state.params.aId;
      
      angular.forEach($scope.events, function (value , key){
        if ($scope.whichEvent == value.title) {
          $scope.event.title=value.title;
          $scope.event.description=value.description;
          $scope.event.type=value.type;
          $scope.event.address=value.address;
        }
      });

    }
    
])


