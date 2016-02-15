(function() {

  angular.module("nationalRailViewer").controller("MainController", MainController);

  function MainController(NationalRail, $interval) {

      var vm = this;
      vm.error = "TEST!";

    var onGetDeparturesComplete = function(data) {
      vm.departures = data;
    };

    var onGetArrivalsComplete = function(data) {
      vm.arrivals = data;
    };

    var onError = function($error) {
      vm.error = "Could not fetch the data!";
    };

    NationalRail.getDepartures().then(onGetDeparturesComplete, onError);
    NationalRail.getArrivals().then(onGetArrivalsComplete, onError);

    $interval(function() {
     NationalRail.getDepartures().then(onGetDeparturesComplete, onError);
      NationalRail.getArrivals().then(onGetArrivalsComplete, onError);
    }, 60000);
  }

}());