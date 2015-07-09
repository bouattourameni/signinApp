angular.module('ionicApp')
<<<<<<< HEAD
.controller('ListEventController', ['$scope','$state','EventService',
    function($scope,$state) {

      $scope.events = getListEvent();
      $scope.whichEvent=$state.params.aId;


      $scope.doRefresh =function() {
      $scope.events = getListEvent();
      }
    }
]);
=======
    .controller('ListEventController', ['$scope', '$http', '$state',
        function ($scope, $http, $state) {

            $http.get('js/event.json').success(function (data) {
                console.log('success read json');

                $scope.events = data.events;
                $scope.whichEvent = $state.params.aId;
                $scope.doRefresh = function () {
                    $http.get('js/event.json').success(function (data) {
                        $scope.events = data.events;
                        $scope.$broadcast('scroll.refreshComplete');
                    });
                }
            });
        }]);
>>>>>>> origin/master
