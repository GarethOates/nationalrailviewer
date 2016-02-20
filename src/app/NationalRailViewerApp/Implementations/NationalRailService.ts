/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../../../typings/app.d.ts" />

namespace app.NationalRailService {
    export class NationalRailService implements app.Interface.INationalRailService {

        http: ng.IHttpService;

        static $inject: Array<string> = ['$http'];
        constructor($http: ng.IHttpService) {
            this.http = $http;
        }

        getDepartures(city: String): ng.IPromise<app.Interface.IQueryResult> {
            return this.http.get("http://nationalrail.azurewebsites.net/departures/" + city)
                .then(function(response) {
                    return response.data;
                });
        }

        getArrivals(city: String): ng.IPromise<app.Interface.IQueryResult> {
            return this.http.get("http://nationalrail.azurewebsites.net/arrivals/" + city)
                .then(function(response) {
                    return response.data;
                });
        }
    }

    angular.module('nationalRailViewer')
        .factory('NationalRail', ['$http', ($http) => new NationalRailService($http)]);
}