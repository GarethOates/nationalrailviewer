/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../../../typings/app.d.ts" />

namespace app.Controller {
    'use strict';

    export class MainController {
        
        city: string;
        departures: app.Interface.IQueryResult;
        arrivals: app.Interface.IQueryResult;

        static $inject: Array<string> = ['NationalRail', '$interval', '$routeParams', 'toastr'];        
        constructor(private NationalRail: app.Interface.INationalRailService, public $interval: ng.IIntervalService, private $routeParams: app.Interface.IParameters, private toastr: Toastr) {
            this.city = $routeParams.City;
            this.GetData();
            this.$interval(this.GetData, 60000);
        };
                
        onGetDeparturesComplete = function(data: app.Interface.IQueryResult) {
            this.departures = data;
        };
        
        onGetArrivalsComplete = function(data: app.Interface.IQueryResult) {
            this.arrivals = data;
        };
        
        isErrorRaised: boolean = false;
        onError($error) {
            if(!this.isErrorRaised) {
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
    (NationalRail, $interval, $routeParams, toastr) =>  new app.Controller.MainController(NationalRail, $interval, $routeParams, toastr)]);

}