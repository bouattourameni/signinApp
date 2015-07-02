
angular.module('ionicApp')
.controller('AdresseController',['$scope',
	function ($timeout, $q, $log) {
var self = this;
    self.simulateQuery = false;
    self.isDisabled    = false;
    self.repos         = loadAll();
    self.querySearch   = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange   = searchTextChange;
    // ******************************
    // Internal methods
    // ******************************
    /**
     * Search for repos... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch (query) {
      var results = query ? self.repos.filter( createFilterFor(query) ) : self.repos,
          deferred;
      if (self.simulateQuery) {
        deferred = $q.defer();
        $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
        return deferred.promise;
      } else {
        return results;
      }
    }
    function searchTextChange(text) {
      $log.info('Text changed to ' + text);
    }
    function selectedItemChange(item) {
      $log.info('Item changed to ' + JSON.stringify(item));
    }
    /**
     * Build `components` list of key/value pairs
     */
    function loadAll() {
      var repos = [
        {
          'name'      : 'Angular 1',
          'url'       : 'https://github.com/angular/angular.js',
          'watchers'  : '3,623',
          'forks'     : '16,175',
        },
        {
          'name'      : 'Angular 2',
          'url'       : 'https://github.com/angular/angular',
          'watchers'  : '469',
          'forks'     : '760',
        },
        {
          'name'      : 'Angular Material',
          'url'       : 'https://github.com/angular/material',
          'watchers'  : '727',
          'forks'     : '1,241',
        },
        {
          'name'      : 'Bower Material',
          'url'       : 'https://github.com/angular/bower-material',
          'watchers'  : '42',
          'forks'     : '84',
        },
        {
          'name'      : 'Material Start',
          'url'       : 'https://github.com/angular/material-start',
          'watchers'  : '81',
          'forks'     : '303',
        }
      ];
      return repos.map( function (repo) {
        repo.value = repo.name.toLowerCase();
        return repo;
      });
    }
    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(item) {
        return (item.value.indexOf(lowercaseQuery) === 0);
      };
    }
}]);
 
		/*$scope.$watch('adresse', function(newVal){
/*mape = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 4,
    center: {lat: -28, lng: 137.883}

  });



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

}

});
function callback(predictions, status) {
  if (status != google.maps.places.PlacesServiceStatus.OK) {
    console.log(status);
    return;
  }
  console.log(predictions);
	}	
*/
	