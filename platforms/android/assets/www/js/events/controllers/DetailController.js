angular.module('ionicApp')

    .controller('DetailController', ['$scope', '$http', '$state', 'EventService',
        function ($scope, $http, $state,EventService) {
            _this=this;
            this.event = {
                title: '',
                description: '',
                type: '',
                address: ''
            };
            EventService
                .getListEvent()
                .then(function (events) {
                    console.log('Found events from getListEvent ', events);
                    _this.whichEvent = $state.params.aId;
                    angular.forEach(events, function (value, key) {
                    if (_this.whichEvent == value.title) {
                    console.log("find one!!");
                    _this.event.description = value.description;
                    _this.event.title = value.title;
                    _this.event.type = value.type;
                    _this.event.address = value.address;
                }
            });
                })
                .catch(function (err) {
                    console.log('Error whith getListEvent ', err);
                });
            
        }

    ]);


