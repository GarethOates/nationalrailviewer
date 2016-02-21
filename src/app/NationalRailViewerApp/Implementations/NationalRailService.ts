/// <reference path="../../../../typings/tsd.d.ts" />
namespace app.services {
    export class NationalRailService implements app.Interfaces.INationalRailService {

        http: ng.IHttpService;

        static $inject: Array<string> = ['$http'];
        constructor($http: ng.IHttpService) {
            this.http = $http;
        }

        getDepartures(city: String): ng.IPromise<app.Interfaces.IQueryResult> {
            return this.http.get("http://nationalrail.azurewebsites.net/departures/" + city)
                .then(function(response) {
                    return response.data;
                });
        }

        getArrivals(city: String): ng.IPromise<app.Interfaces.IQueryResult> {
            return this.http.get("http://nationalrail.azurewebsites.net/arrivals/" + city)
                .then(function(response) {
                    return response.data;
                });
        }
    }

    angular.module('nationalRailViewer')
        .factory('NationalRail', ['$http', ($http: ng.IHttpService) => new NationalRailService($http)]);
}