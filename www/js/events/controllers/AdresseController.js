angular.module('ionicApp')
    .controller('AdresseController',
    ['$scope',
        '$http',
        '$timeout',
        function ($scope, $http, $timeout) {
            console.log('#AddressController');
            var _this = this;
            $scope.address = '';
            this.center = {
                lat: 40.095,
                lng: -3.823,
                zoom: 8
            };
            var t = $timeout(function () {
            }, 5000);
            var pyrmont = new google.maps.LatLng(_this.center.lat, _this.center.lng);
            this.map = new google.maps.Map(document.getElementById('map-canvas'), {
                center: pyrmont,
                zoom: _this.center.zoom
            });
            var marker;
            var bounds = new google.maps.LatLngBounds();
            geocoder = new google.maps.Geocoder();
            google.maps.event.addListener(this.map, 'click', function (e) {
                placeMarker(e.latLng, this.map);
            });
            $scope.$watch('address', function (newVal) {
                _this.address = newVal;
                console.log(newVal);
                if (!angular.equals(_this.address
                        , '')) {
                    var service = new google.maps.places.AutocompleteService();
                    service.getPlacePredictions({
                            input: _this.address
                        },
                        function callback(predictions, status) {
                            if (status != google.maps.places.PlacesServiceStatus.OK) {
                                console.log("false");
                                return;
                            }
                            console.log(predictions);
                            var prediction = predictions[0];

                            var request = {
                                placeId: prediction.place_id
                            };

                            var service = new google.maps.places.PlacesService(_this.map);
                            service.getDetails(request,
                                function (place, status) {
                                    if (status == google.maps.places.PlacesServiceStatus.OK) {
                                        console.log(place);
                                        _this.map.setCenter(new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng()));
                                        if (predictions.length == 1) {
                                            placeMarker(new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng()), _this.map);
                                        }
                                    } else {
                                        return;
                                    }
                                }
                            );
                        });
                }
            });
            function placeMarker(position, map) {
                if (marker != null) marker.setMap(null);
                marker = new google.maps.Marker({
                    position: position,
                    map: map
                });
                marker.setMap(_this.map);
                geocoder.geocode({'location': position}, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        $scope.address
                            = results[0].formatted_address;
                        $scope.$apply();
                    }
                });

            }

        }

    ]);