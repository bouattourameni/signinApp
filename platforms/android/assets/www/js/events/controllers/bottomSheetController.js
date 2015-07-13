angular.module('ionicApp')
.controller('bottomSheetController', 
  ['$scope', 
  '$mdBottomSheet', 
  '$state',
  '$location',
  '$http',
  'EventService',
  function($scope, $mdBottomSheet,$state,$location,$http,EventService) {
  $scope.listItemClick = function(index) {
    console.log("item Clicked "+index);
    switch(index){
      case 0 : break;
      case 1 : 
      $location.url('/edit/'+$state.params.aId);
      break ;
      break;

      case 2 : 
      $http
          .post("http://3ac64109.ngrok.com/event/delete?id="+$state.params.aId)
          .then(function (result){
            EventService.getListEvent().then(function (events) {
                     $location.url('/list');
                })
            .catch(function (err) {
                    console.log('Error with getListEvent ', err);
                });

          }).catch(function (err) {
                    console.log('Error with deleting event ', err);
                });
      
      
      break ;
    }
    $mdBottomSheet.hide(index);
  };
}])