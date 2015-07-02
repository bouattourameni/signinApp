angular.module('ionicApp')
.controller('AdresseController',['$scope',
	function($scope){
		var _this = this;
		this.adresse = '';
		$scope.$watch('adresse', function(newVal){
/*mape = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 4,
    center: {lat: -28, lng: 137.883}

  });
*/


_this.adresse= newVal;
console.log(_this.adresse);
$scope.$on('mapInitialized', function(event, map) {
	console.log(map.getCenter());
});
if (!angular.equals(_this.adresse,'') ){
 var service = new google.maps.places.AutocompleteService();

  service.getPlacePredictions({input : _this.adresse}, callback);




 /* var results = document.getElementById('results');

  for (var i = 0, prediction; prediction = predictions[i]; i++) {
    results.innerHTML += '<li>' + prediction.description + '</li>';
  }*/
}

});
function callback(predictions, status) {
  if (status != google.maps.places.PlacesServiceStatus.OK) {
    console.log(status);
    return;
  }
  console.log(predictions);
	}	

	}
	
]);