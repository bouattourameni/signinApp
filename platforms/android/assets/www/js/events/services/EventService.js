angular.module('ionicApp').factory('EventService', ['$http', '$q', function ($http, $q) {
    console.log('#EventService');
    var event = {
            title: '',
            description: '',
            type: '',
            address: '',
            date: ''
        },
        createEvent = function () {
            listEvent.push(event);
            return true;
        },
        editEvent = function () {

        }
    deleteEvent = function () {

    }



    getTitle = function () {
        return event.title;
    }
    setTitle = function (title) {
        event.title = title;
        return true;
    }

    getDescription = function () {
        return event.description;
    }
    setDescription = function (description) {
        event.description = description;
        return true;
    }


    getType = function () {
        return event.type;
    }
    setType = function (type) {
        event.type = type;
        return true;
    }


    getAddress = function () {
        return event.address;
    }
    setAddress = function (address) {
        event.address = address;
        return true;
    }

    getDate = function () {
        return event.date;
    }
    setDate = function (date) {
        event.date = date;
        return true;
    }
    getEvent = function () {
        return event;
    }

    var serviceAPI = {
        getListEvent: function () {
            var deferred = $q.defer();
            console.log('EventService.getListEvent');
            $http.get("http://3ac64109.ngrok.com/event/find")
                .then(function (result) {
                    //console.log('dqtq : ', eventsFound);
                    console.log('Got events : ', result.data.events);
                    deferred.resolve(result.data.events);
                })
                .catch(function (err) {
                    console.log('Error when trying to find events ', err);
                    deferred.reject();
                });
            return deferred.promise;
        }
    };
    return serviceAPI;
}]);
