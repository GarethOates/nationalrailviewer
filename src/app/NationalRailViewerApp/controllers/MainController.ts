/// <reference path="../../../../typings/tsd.d.ts" />
namespace app.controllers {

    export class MainController {

        public city: string;
        public departures: Interfaces.IQueryResult;
        public arrivals: Interfaces.IQueryResult;
        public error: string;

        static $inject: Array<string> = ['nationalRail', '$interval', '$routeParams'];
        constructor(private NationalRail: app.Interfaces.INationalRailService, private $interval: ng.IIntervalService, private $routeParams: Interfaces.IParameters) {
            this.city = $routeParams.City;
            this.GetData();
            this.$interval(() => {
                this.GetData();
            }, 60000);
        }

        GetData(): void {
            this.NationalRail.getDepartures(this.city).then((data: app.Interfaces.IQueryResult) => {
                this.departures = data;
                this.error = null;
            }, () => { this.error = "Unable to load data for '" + this.city + "'"; });

            this.NationalRail.getArrivals(this.city).then((data: app.Interfaces.IQueryResult) => {
                this.arrivals = data;
                this.error = null;
            }, () => { this.error = "Unable to load data for '" + this.city + "'"; });
        }
    }

    var appModule = angular.module('nationalRailViewer')
    appModule.controller('MainController', ['nationalRail', '$interval', '$routeParams',
        (nationalRail: app.Interfaces.INationalRailService, $interval: ng.IIntervalService, $routeParams: Interfaces.IParameters) => new MainController(nationalRail, $interval, $routeParams)]);
}