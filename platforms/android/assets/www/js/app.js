angular.module('ionicApp', ['ionic',
    'ngCordova',
    'ngCordovaOauth',
    'ngMaterial',
    'ngAria'

])

    .run(function ($ionicPlatform, $rootScope, $cordovaOauth,$http) {
        $ionicPlatform.ready(function () {
                console.log('run in');
                $http
                .post("http://3ac64109.ngrok.com/auth/facebook")
                .then(function (result) {
                    console.log('user login ', result);
                })
                .catch(function (err) {
                    console.log('Error when user login ', err);
                    return 'Failed creating event';
                });
            /*     Facebook authentification
                if(window.localStorage.getItem("id") == undefined)  {
                    console.log('if structure')
                           $cordovaOauth.facebook("838665296203217", ["email","name"]).then(function(result) {

                         window.localStorage.setItem("id", result.access_token);
                         console.log(result);
                         }, function(error) {
                         alert('Facebook login failed: ' + error);
                      });

              */ 
            }
        );
    })
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('list', {
                url: '/list',
                templateUrl: 'template/list.html',
                controller: 'ListEventController as listEventCtrl'
            })
            .state('detail', {
                url: '/detail/:aId',
                templateUrl: 'template/detail.html',
                controller: 'DetailController as detailCtrl'
            })
            .state('edit', {
                url: '/edit/:aId',
                templateUrl: 'template/edit.html',
                controller: 'EditEventController as editCtrl'
            })
            .state('add', {
                url: '/add',
                templateUrl: 'template/add.html',
                controller: 'AddEventController as addEventCtrl'

            })
            .state('share', {
                url: '/share',
                templateUrl: 'template/share.html',
                controller: 'ShareEventController as shareEvent'

            });

        $urlRouterProvider.otherwise('/list');

    });






