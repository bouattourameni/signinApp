angular.module('ionicApp')

    .controller('ListEventController', ['$state', 'EventService',
        function ($state, EventService) {
            console.log('#ListEventController');
            var _this = this;
            this.events = [];
            //console.log('getListEvent returns ', getListEvent());
            EventService
                .getListEvent()
                .then(function (events) {
                    console.log('Found events from getListEvent ', events);
                    _this.events = events;
                })
                .catch(function (err) {
                    console.log('Error whith getListEvent ', err);
                });
            //
            //this.doRefresh = function () {
            //    this.events = getListEvent();
            //}
        }
    ]);

