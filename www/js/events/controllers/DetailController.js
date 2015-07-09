angular.module('ionicApp')
<<<<<<< HEAD
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
=======
    .controller('DetailController', ['$scope', '$http', '$state',
        function ($scope, $http, $state) {

            $http.get('js/event.json').success(function (data) {
                    console.log('success read json');
                    $scope.event = {
                        title: '',
                        description: '',
                        type: '',
                        addresse: ''

                    };
                    $scope.events = data.events;
                    $scope.whichEvent = $state.params.aId;
>>>>>>> origin/master

                    angular.forEach($scope.events, function (value, key) {
                        if ($scope.whichEvent == value.title) {
                            $scope.event.title = value.title;
                            $scope.event.description = value.description;
                            $scope.event.type = value.type;
                            $scope.event.addresse = value.adresse;
                        }
                    });

<<<<<<< HEAD
    }
    
])
=======

                }
            );
        }])
>>>>>>> origin/master
