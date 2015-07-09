angular.module('ionicApp')
    .controller('ShareEventController', function ($scope, $cordovaContacts) {


        $cordovaContacts.find({filter: 'Omar'}).then(function (result) {
            $scope.wanted = [];
            angular.forEach(result, function (contact) {
                $scope.wanted.push({
                    id: contact.id,
                    selected: false
                });
            });
            $scope.contacts = result;

        }, function (error) {
            console.log("ERROR: " + error);
        });

        $scope.allSelected = function () {
            console.log($scope.wanted);
        }

    });