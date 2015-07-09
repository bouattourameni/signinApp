angular.module('ionicApp')

.controller('ListEventController', ['$scope','$state','EventService',
    function($scope,$state) {

      $scope.events = getListEvent();
      $scope.whichEvent=$state.params.aId;


      $scope.doRefresh =function() {
      $scope.events = getListEvent();
      }
    }
]);

