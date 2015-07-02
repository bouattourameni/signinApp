angular.module('ionicApp')
.controller('ListEventController', ['$scope','$http', '$state',
    function($scope, $http, $state) {
      console.log('hqhq');
    $http.get('js/event.json').success(function(data) {
      console.log('success read json');
      $scope.events = data.events;
      $scope.doRefresh =function() {
      $http.get('js/event.json').success(function(data) {
          $scope.events = data.events;
          $scope.$broadcast('scroll.refreshComplete'); 
        });
      }
    });
}])
