/// <reference path="../../../../typings/tsd.d.ts" />
namespace app.controllers {
    export class MainController {

        public city: string;
        public departures: Interfaces.IQueryResult;
        public arrivals: Interfaces.IQueryResult;

        static $inject: Array<string> = ['NationalRail', '$interval', '$routeParams', 'toastr'];
        constructor(public NationalRail: app.Interfaces.INationalRailService, public $interval: ng.IIntervalService, public $routeParams: Interfaces.IParameters, public toastr: Toastr) {
            this.city = $routeParams.City;
            this.GetData();
            this.$interval(this.GetData, 60000);
        };

        onGetDeparturesComplete(data: app.Interfaces.IQueryResult): void {
            this.departures = data;
        };

        onGetArrivalsComplete(data: app.Interfaces.IQueryResult): void {
            this.arrivals = data;
        };

        isErrorRaised: boolean = false;
        onError($error: string) {
            if (!this.isErrorRaised) {
                toastr.error("Could not load data for '" + this.city + "'!", 'Error');
                this.isErrorRaised = !this.isErrorRaised;
            }
        };

        GetData(): void {
            this.NationalRail.getDepartures(this.city).then(this.onGetDeparturesComplete, this.onError);
            this.NationalRail.getArrivals(this.city).then(this.onGetArrivalsComplete, this.onError);
        }
    }

    var appModule = angular.module('nationalRailViewer')
    appModule.controller('MainController', ['NationalRail', '$interval', '$routeParams', 'toastr',
        (NationalRail: app.Interfaces.INationalRailService, $interval: ng.IIntervalService, $routeParams: Interfaces.IParameters, toastr: Toastr) => new MainController(NationalRail, $interval, $routeParams, toastr)]);
}