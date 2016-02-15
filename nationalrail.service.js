(function() {

  angular.module("nationalRailViewer").factory("NationalRail", nationalRail);

  function nationalRail($http) {

    var getDepartures = function() {
      return $http.get("http://nationalrail.azurewebsites.net/departures/aberdeen")
        .then(function(response) {
          return response.data;
        });
    };

    var getArrivals = function() {
      return $http.get("http://nationalrail.azurewebsites.net/arrivals/aberdeen")
        .then(function(response) {
          return response.data;
        });
    };

    return {
      getDepartures: getDepartures,
      getArrivals: getArrivals
    };
  };

}());