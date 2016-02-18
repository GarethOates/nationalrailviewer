(function () {
    function nationalRail($http) {

        var getDepartures = function (city) {
            return $http.get("http://nationalrail.azurewebsites.net/departures/" + city)
                .then(function (response) {
                    return response.data;
                });
        };

        var getArrivals = function (city) {
            return $http.get("http://nationalrail.azurewebsites.net/arrivals/" + city)
                .then(function (response) {
                    return response.data;
                });
        };

        return {
            getDepartures: getDepartures,
            getArrivals: getArrivals
        };
    };

    nationalRail.$inject = ['$http'];
    angular.module("nationalRailViewer").factory("NationalRail", nationalRail);
} ());