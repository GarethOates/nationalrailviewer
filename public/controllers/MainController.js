(function () {

    angular.module("nationalRailViewer").controller("MainController", MainController);

    function MainController(NationalRail, $interval, $routeParams, toastr) {

        var vm = this;
        vm.city = $routeParams.City;

        function GetData() {
            NationalRail.getDepartures(vm.city).then(onGetDeparturesComplete, onError);
            NationalRail.getArrivals(vm.city).then(onGetArrivalsComplete, onError);
        }

        var onGetDeparturesComplete = function (data) {
            vm.departures = data;
        };

        var onGetArrivalsComplete = function (data) {
            vm.arrivals = data;
        };

        var isErrorRaised = false;
        var onError = function ($error) {
            if (!isErrorRaised) {
                vm.error = 'Could not load data for "' + vm.city + '"';
                toastr.error(vm.error, 'Error');
                isErrorRaised = !isErrorRaised;
            }
        };

        GetData();
        $interval(GetData, 60000);
    }
} ());