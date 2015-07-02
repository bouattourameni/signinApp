
angular.module('ionicApp', ['ionic','ngCordova', 'ngCordovaOauth','ngMaterial','ngMap'])

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
      controller: 'ListEventController as listEvent'
    })
    .state('add', {
      url: '/add',
      templateUrl: 'template/add.html',
      controller: 'AddEventController as addEvent'
      
    })
    
    $urlRouterProvider.otherwise('/list');

})






