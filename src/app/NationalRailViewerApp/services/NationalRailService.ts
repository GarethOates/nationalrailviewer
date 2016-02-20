/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../../../typings/app.d.ts" />

namespace App.Services {
    export class NationalRailService implements INationalRailService {
        
        http: ng.IHttpService;
        
        static $inject: Array<string> = ['$http'];
        constructor($http: ng.IHttpService) {
            this.http = $http;
        }
        
        getDepartures(city: String): ng.IPromise<IQueryResult> {
            return this.http.get("http://nationalrail.azurewebsites.net/departures/" + city)
                .then(function (response) {
                    return response.data;
                });
        }
        
        getArrivals(city: String): ng.IPromise<IQueryResult> {
                        return this.http.get("http://nationalrail.azurewebsites.net/arrivals/" + city)
                .then(function (response) {
                    return response.data;
                });
        }
    }
    
    var appModule = angular.module('NationalRailService');
    appModule.factory('NationalRail', ['$http', ($http) => new App.Services.NationalRailService($http)]);
}