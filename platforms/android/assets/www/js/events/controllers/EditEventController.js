angular.module('ionicApp').controller('EditEventController', 
    ['EventService', '$scope','$state','$http','$location',
    function (EventService ,$scope, $state,$http,$location) {
        ID = $state.params.aId;
        _this = this;
        _this.title = '';
        _this.description = '';
        _this.type = '';
        _this.date = '';
        _this.address = '';
        $http
                .get("http://3ac64109.ngrok.com/event/findOne?id="+$state.params.aId )
                .then(function (value) {
                    console.log('event found ', value.data.event);
                    _this.description = value.data.event.description;
                    _this.title = value.data.event.title;
                    _this.type = value.data.event.type;
                    document.getElementById("address").value=value.data.event.address;
                    
                    
                })
                .catch(function (err) {
                    console.log('Error when looking for event ', err);
                    return 'Failed finding event';
                });
        this.saving = function () {
            console.log("saving");
            $http
            .post("http://3ac64109.ngrok.com/event/update", {
                    id : $state.params.aId,
                    title: _this.title,
                    description: _this.description,
                    type: _this.type,
                    date: _this.date,
                    address: document.getElementById('address').value
                })
            .then(function (result){
            EventService.getListEvent().then(function (events) {
                     $location.url('/list');
                })
            .catch(function (err) {
                    console.log('Error with getListEvent ', err);
                });

          }).catch(function (err) {
                    console.log('Error with updating event ', err);
                });
        }
    }

]);