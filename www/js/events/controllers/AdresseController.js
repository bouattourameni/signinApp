angular.module('ionicApp')
.controller('AdresseController',
              ['$scope',
                '$http',
	               function($scope,$http){
		               var _this = this;
		               this.adresse = '';
                   this.center= {
                                 lat: 40.095,
                                 lng: -3.823,
                                 zoom: 8
                                 };
                   this.map = null;
		               $scope.$watch('adresse', function(newVal){
                      _this.adresse= newVal;
                      if (!angular.equals(_this.adresse,'') ){
                             var service = new google.maps.places.AutocompleteService();
                            service.getPlacePredictions({input : _this.adresse},
                        function callback(predictions, status) {
                              if (status != google.maps.places.PlacesServiceStatus.OK) {
                              return;
                                  }
                        console.log(predictions);
                         var prediction = predictions[0];
                    
                        var request = {
                        placeId: prediction.place_id
                                      };

                        var pyrmont = new google.maps.LatLng(_this.center.lat,_this.center.lng);

                        map = new google.maps.Map(document.getElementById('map-canvas'), {
                                center: pyrmont,
                                zoom: _this.center.zoom
                            });
                        var service = new google.maps.places.PlacesService(map);
                        service.getDetails(request,
                        function(place, status){
                              if (status == google.maps.places.PlacesServiceStatus.OK) {
                              console.log(place);
         
                              _this.center= {
                                    lat: place.geometry.location.lat(),
                                    lng: place.geometry.location.lng(),
                                    zoom: 8
                                            };
                              } else {
              
                                  return;
                                    }
                                               }
                
                                          );

                                                                    });
	

}})
}
	
]);