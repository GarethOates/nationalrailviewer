/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../../../typings/app.d.ts" />

namespace Interfaces {
    export class MainController {

        city: string;
        departures: IQueryResult;
        arrivals: IQueryResult;

        static $inject: Array<string> = ['NationalRail', '$interval', '$routeParams', 'toastr'];
        constructor(public NationalRail: INationalRailService, public $interval: ng.IIntervalService, public $routeParams: IParameters, public toastr: Toastr) {
            this.city = $routeParams.City;
            this.GetData();
            this.$interval(this.GetData, 60000);
        };

        onGetDeparturesComplete = function(data: IQueryResult) {
            this.departures = data;
        };

        onGetArrivalsComplete = function(data: IQueryResult) {
            this.arrivals = data;
        };

        isErrorRaised: boolean = false;
        onError($error) {
            if (!this.isErrorRaised) {
                toastr.error('Could not load data for "' + this.city + '"', 'Error');
                this.isErrorRaised = !this.isErrorRaised;
            }
        };

        public GetData = function() {
            this.NationalRail.getDepartures(this.city).then(this.onGetDeparturesComplete, this.onError);
            this.NationalRail.getArrivals(this.city).then(this.onGetArrivalsComplete, this.onError);
        }
    }

    var appModule = angular.module('nationalRailViewer')
    appModule.controller('MainController', ['NationalRail', '$interval', '$routeParams', 'toastr',
        (NationalRail, $interval, $routeParams, toastr) => new MainController(NationalRail, $interval, $routeParams, toastr)]);
}