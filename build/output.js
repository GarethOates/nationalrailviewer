var app;
(function (app) {
    angular.module("nationalRailViewer", ["ngRoute", "toastr", "ngAnimate"]);
})(app || (app = {}));
var app;
(function (app) {
    var routes;
    (function (routes) {
        function configure($routeProvider) {
            $routeProvider.when("/:City", {
                templateUrl: "build/views/main.html",
                controller: "MainController",
                controllerAs: "vm"
            }).otherwise({
                redirectTo: "/Aberdeen"
            });
        }
        configure.$inject = ['$routeProvider'];
        angular.module("nationalRailViewer").config(configure);
    })(routes = app.routes || (app.routes = {}));
})(app || (app = {}));
/// <reference path="../../../../typings/tsd.d.ts" />
var app;
(function (app) {
    var controllers;
    (function (controllers) {
        var MainController = (function () {
            function MainController(NationalRail, $interval, $routeParams, toastr) {
                var _this = this;
                this.NationalRail = NationalRail;
                this.$interval = $interval;
                this.$routeParams = $routeParams;
                this.toastr = toastr;
                this.isErrorRaised = false;
                this.city = $routeParams.City;
                this.GetData();
                this.$interval(function () {
                    _this.GetData();
                }, 60000);
            }
            MainController.prototype.onError = function ($error) {
                if (!this.isErrorRaised) {
                    toastr.error("Could not load data for '" + this.city + "'!", 'Error');
                    this.isErrorRaised = !this.isErrorRaised;
                }
            };
            ;
            MainController.prototype.GetData = function () {
                var _this = this;
                this.NationalRail.getDepartures(this.city).then(function (data) {
                    _this.departures = data;
                }, this.onError);
                this.NationalRail.getArrivals(this.city).then(function (data) {
                    _this.arrivals = data;
                }, this.onError);
            };
            MainController.$inject = ['nationalRail', '$interval', '$routeParams', 'toastr'];
            return MainController;
        })();
        controllers.MainController = MainController;
        var appModule = angular.module('nationalRailViewer');
        appModule.controller('MainController', ['nationalRail', '$interval', '$routeParams', 'toastr',
            function (nationalRail, $interval, $routeParams, toastr) { return new MainController(nationalRail, $interval, $routeParams, toastr); }]);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
var app;
(function (app) {
    var controllers;
    (function (controllers) {
        'use strict';
        var TestController = (function () {
            function TestController(NationalRail) {
                this.NationalRail = NationalRail;
            }
            TestController.$inject = ['NationalRail'];
            return TestController;
        })();
        controllers.TestController = TestController;
        angular
            .module('nationalRailViewer')
            .controller('TestController', TestController);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
var app;
(function (app) {
    var dataobjects;
    (function (dataobjects) {
        var Journey = (function () {
            function Journey() {
            }
            return Journey;
        })();
        dataobjects.Journey = Journey;
    })(dataobjects = app.dataobjects || (app.dataobjects = {}));
})(app || (app = {}));
/// <reference path="../../../../typings/tsd.d.ts" />
var app;
(function (app) {
    var services;
    (function (services) {
        var NationalRailService = (function () {
            function NationalRailService($http) {
                this.http = $http;
            }
            NationalRailService.prototype.getDepartures = function (city) {
                return this.http.get("http://nationalrail.azurewebsites.net/departures/" + city)
                    .then(function (response) {
                    return response.data;
                });
            };
            NationalRailService.prototype.getArrivals = function (city) {
                return this.http.get("http://nationalrail.azurewebsites.net/arrivals/" + city)
                    .then(function (response) {
                    return response.data;
                });
            };
            NationalRailService.$inject = ['$http'];
            return NationalRailService;
        })();
        services.NationalRailService = NationalRailService;
        angular.module('nationalRailViewer')
            .service('nationalRail', ['$http', function ($http) { return new NationalRailService($http); }]);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
var app;
(function (app) {
    var dataobjects;
    (function (dataobjects) {
        var QueryResult = (function () {
            function QueryResult(trainServices) {
                this.trainServices = trainServices;
            }
            return QueryResult;
        })();
        dataobjects.QueryResult = QueryResult;
    })(dataobjects = app.dataobjects || (app.dataobjects = {}));
})(app || (app = {}));
var app;
(function (app) {
    var dataobjects;
    (function (dataobjects) {
        var TrainServices = (function () {
            function TrainServices() {
            }
            return TrainServices;
        })();
        dataobjects.TrainServices = TrainServices;
    })(dataobjects = app.dataobjects || (app.dataobjects = {}));
})(app || (app = {}));
//// <reference path="../../../../typings/tsd.d.ts" />
