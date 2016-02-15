(function() {

  angular.module("nationalRailViewer").controller("MainController", MainController);

  function MainController(NationalRail, $interval, $routeParams, toastr) {

      var vm = this;
      
      vm.city = $routeParams.City;

      var onGetDeparturesComplete = function (data) {
      vm.departures = data;
    };

    var onGetArrivalsComplete = function(data) {
      vm.arrivals = data;
    };

    var onError = function($error) {
        toastr.error('Could not load data for ' + vm.city);
    };
    
    function GetData() {
        NationalRail.getDepartures(vm.city).then(onGetDeparturesComplete, onError);
        NationalRail.getArrivals(vm.city).then(onGetArrivalsComplete, onError);
    }

    GetData();

    $interval(function() {
        GetData();
    }, 60000);
  }

}());