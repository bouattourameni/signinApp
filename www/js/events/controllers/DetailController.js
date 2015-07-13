angular.module('ionicApp')

.controller('DetailController', ['$scope', '$http', '$state', 'EventService','$mdBottomSheet',
    function ($scope, $http, $state,EventService,$mdBottomSheet) {
        _this=this;
        this.event = {
            title: '',
            description: '',
            type: '',
            address: ''
        };
        console.log($state.params.aId);
        $http
                .get("http://3ac64109.ngrok.com/event/findOne?id="+$state.params.aId )
                .then(function (value) {
                    console.log('event found ', value.data.event);
                    _this.event.description = value.data.event.description;
                    _this.event.title = value.data.event.title;
                    _this.event.type = value.data.event.type;
                    _this.event.address = value.data.event.address;
                    
                })
                .catch(function (err) {
                    console.log('Error when looking for event ', err);
                    return 'Failed finding event';
                });
        
        $scope.showGrid = function($event) {
           $mdBottomSheet.show({
              templateUrl: 'template/bottom-sheet-grid-template.html',
              controller: 'bottomSheetController',
              targetEvent: $event
          }).then(function(clickedItem) {
          });
      };
  }

  ]);


