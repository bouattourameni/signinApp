angular.module('ionicApp').factory('EventService', ['$http', '$q', function ($http, $q) {
    console.log('#EventService');
    var event;

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
