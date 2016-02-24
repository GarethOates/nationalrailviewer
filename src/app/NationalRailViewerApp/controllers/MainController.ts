/// <reference path="../../../../typings/tsd.d.ts" />
namespace app.controllers {
    export class MainController {

        public city: string;
        public departures: Interfaces.IQueryResult;
        public arrivals: Interfaces.IQueryResult;

        static $inject: Array<string> = ['nationalRail', '$interval', '$routeParams', 'toastr'];
        constructor(private NationalRail: app.Interfaces.INationalRailService, private $interval: ng.IIntervalService, private $routeParams: Interfaces.IParameters, private toastr: Toastr) {
            this.city = $routeParams.City;
            this.GetData();
            this.$interval(() => {
                this.GetData();
            }, 60000);
        }

        isErrorRaised: boolean = false;
        onError($error: string) {
            if (!this.isErrorRaised) {
                toastr.error("Could not load data for '" + this.city + "'!", 'Error');
                this.isErrorRaised = !this.isErrorRaised;
            }
        };

        GetData(): void {
            this.NationalRail.getDepartures(this.city).then((data: app.Interfaces.IQueryResult) => {
                this.departures = data;
            }, this.onError);

            this.NationalRail.getArrivals(this.city).then((data: app.Interfaces.IQueryResult) => {
                this.arrivals = data;
            }, this.onError);
        }
    }

    var appModule = angular.module('nationalRailViewer')
    appModule.controller('MainController', ['nationalRail', '$interval', '$routeParams', 'toastr',
        (nationalRail: app.Interfaces.INationalRailService, $interval: ng.IIntervalService, $routeParams: Interfaces.IParameters, toastr: Toastr) => new MainController(nationalRail, $interval, $routeParams, toastr)]);
}