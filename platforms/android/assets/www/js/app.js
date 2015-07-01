angular.module('ionicApp', ['ionic','ngCordova', 'ngCordovaOauth','ngMaterial','ng-mfb'])

.run(function ($ionicPlatform, $rootScope, $cordovaOauth) {
     $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar          above the keyboard
    // for form inputs)
     console.log('run in')
     
     if(window.localStorage.getItem("id") == undefined)  {
      console.log('if structure')
             $cordovaOauth.facebook("838665296203217", ["email"]).then(function(result) {
         
           window.localStorage.setItem("id", result.access_token);
           console.log(result);
           }, function(error) {
           alert('Facebook login failed: ' + error);
        });

         
  }
}); 

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
    $urlRouterProvider.otherwise('/list');
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
.controller('MapController', function($scope, $ionicLoading) {
 
    google.maps.event.addDomListener(window, 'load', function() {
        var myLatlng = new google.maps.LatLng(37.3000, -120.4833);
 
        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
 
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
        navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                title: "My Location"
            });
        });
 
        $scope.map = map;
    });
 
});


