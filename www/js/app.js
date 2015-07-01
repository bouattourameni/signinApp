angular.module('ionicApp', ['ionic','ngCordova', 'ngCordovaOauth','ngMaterial','ng-mfb'])

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
.controller('MapCtrl', function($scope, $ionicLoading, $compile) {
      function initialize() {
        var myLatlng = new google.maps.LatLng(43.07493,-89.381388);
        
        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);
        
        //Marker + infowindow + angularjs compiled ng-click
        var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
        var compiled = $compile(contentString)($scope);

        var infowindow = new google.maps.InfoWindow({
          content: compiled[0]
        });

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Uluru (Ayers Rock)'
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });

        $scope.map = map;
      }
      google.maps.event.addDomListener(window, 'load', initialize);
      
      $scope.centerOnMe = function() {
        if(!$scope.map) {
          return;
        }

        $scope.loading = $ionicLoading.show({
          content: 'Getting current location...',
          showBackdrop: false
        });

        navigator.geolocation.getCurrentPosition(function(pos) {
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          $scope.loading.hide();
        }, function(error) {
          alert('Unable to get location: ' + error.message);
        });
      };
      
      $scope.clickTest = function() {
        alert('Example of infowindow with ng-click')
      };
      
    });


