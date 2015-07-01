angular.module('ionicApp', ['ionic','ngCordova', 'ngCordovaOauth','ngMaterial','uiGmapgoogle-maps'])

.run(function ($ionicPlatform, $rootScope, $cordovaOauth) {
     $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar          above the keyboard
    // for form inputs)
     console.log('run in')
     
  /*   Facebook authentification
  if(window.localStorage.getItem("id") == undefined)  {
      console.log('if structure')
             $cordovaOauth.facebook("838665296203217", ["email"]).then(function(result) {
         
           window.localStorage.setItem("id", result.access_token);
           console.log(result);
           }, function(error) {
           alert('Facebook login failed: ' + error);
        });

     */    
  }
); 

})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('list', {
      url: '/list',
      templateUrl: 'template/list.html',
      controller: 'ListController'
    })
    .state('add', {
      url: '/add',
      templateUrl: 'template/add.html',
      controller: 'AddEvent'
      
    })
    .state('map', {
      url: '/map',
      templateUrl: 'template/map.html',
      controller: 'MapCtrl'
      
    })
    $urlRouterProvider.otherwise('/map');

})

.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyCoPcuyCvMGRVgKdCxEzrylIdKOkRq9h5M',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });
})
.controller('ListController', ['$scope', '$http', '$state',
    function($scope, $http, $state) {
      console.log('hqhq');
    $http.get('js/event.json').success(function(data) {
      console.log('sucess read json');
      $scope.events = data.events;
      $scope.doRefresh =function() {
      $http.get('js/event.json').success(function(data) {
          $scope.events = data.events;
          $scope.$broadcast('scroll.refreshComplete'); 
        });
      }
    });
}])
.controller('AddEvent', function($scope){
  $scope.addEvent = {
    title : '',
    description : '',
    adresse : '',
    type : ''
  }
}
  )
.controller('MapCtrl', function($scope, $ionicLoading, $compile) {
      $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    });


