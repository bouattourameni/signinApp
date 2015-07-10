angular.module('ionicApp').controller('AddEventController', ['EventService', '$scope', '$q', '$http',
    function ($scope, EventService, $q, $http) {
        console.log('#AddEventController');
        _this = this;
        _this.event = {};

        this.title = '';
        this.description = '';
        this.type = '';
        this.date = '';
        this.address = '';

        this.addEvent = function () {
            console.log('-AddEventController.addEvent()');
            $http
                .post("http://3ac64109.ngrok.com/event/create", {
                    title: _this.title,
                    description: _this.description,
                    type: _this.type,
                    date: _this.date,
                    address: _this.address
                })
                .then(function (result) {
                    console.log('event created ', result.data);
                    return {createdEvent: result.data};
                })
                .catch(function (err) {
                    console.log('Error when creating event ', err);
                    return 'Failed creating event';
                });
        }
    }

]);
