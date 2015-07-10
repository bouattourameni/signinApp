angular.module('ionicApp').controller('AddEventController', ['EventService', '$scope',
    function ($scope, EventService) {
        console.log('#AddEventController');
        _this = this;
        $scope.title = '';
        $scope.description = '',
            $scope.type = '',
            $scope.date = '',


            this.saving = function () {
                console.log('AddEventController.saving()');
                setTitle(_this.title);
                setDescription(_this.description);
                setType(_this.type);
                setAddress(document.getElementById('address').value);
                setDate(_this.date);
                createEvent(getEvent());

            }
    }

]);
