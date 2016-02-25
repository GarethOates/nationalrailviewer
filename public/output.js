var app;!function(t){angular.module("nationalRailViewer",["ngRoute"])}(app||(app={}));var app;!function(t){var a;!function(t){function a(t){t.when("/:City",{templateUrl:"main.html",controller:"MainController",controllerAs:"vm"}).otherwise({redirectTo:"/Aberdeen"})}a.$inject=["$routeProvider"],angular.module("nationalRailViewer").config(a)}(a=t.routes||(t.routes={}))}(app||(app={}));var app;!function(t){var a;!function(t){var a=function(){function t(t,a,n){var r=this;this.NationalRail=t,this.$interval=a,this.$routeParams=n,this.city=n.City,this.GetData(),this.$interval(function(){r.GetData()},6e4)}return t.prototype.GetData=function(){var t=this;this.NationalRail.getDepartures(this.city).then(function(a){t.departures=a},function(){t.error="Unable to load data for '"+t.city+"'"}),this.NationalRail.getArrivals(this.city).then(function(a){t.arrivals=a},function(){t.error="Unable to load data for '"+t.city+"'"})},t.$inject=["nationalRail","$interval","$routeParams"],t}();t.MainController=a;var n=angular.module("nationalRailViewer");n.controller("MainController",["nationalRail","$interval","$routeParams",function(t,n,r){return new a(t,n,r)}])}(a=t.controllers||(t.controllers={}))}(app||(app={}));var app;!function(t){var a;!function(t){var a=function(){function t(){}return t}();t.Journey=a}(a=t.dataobjects||(t.dataobjects={}))}(app||(app={}));var app;!function(t){var a;!function(t){var a=function(){function t(t){this.http=t}return t.prototype.getDepartures=function(t){return this.http.get("http://nationalrail.azurewebsites.net/departures/"+t).then(function(t){return t.data})},t.prototype.getArrivals=function(t){return this.http.get("http://nationalrail.azurewebsites.net/arrivals/"+t).then(function(t){return t.data})},t.$inject=["$http"],t}();t.NationalRailService=a,angular.module("nationalRailViewer").service("nationalRail",["$http",function(t){return new a(t)}])}(a=t.services||(t.services={}))}(app||(app={}));var app;!function(t){var a;!function(t){var a=function(){function t(t){this.trainServices=t}return t}();t.QueryResult=a}(a=t.dataobjects||(t.dataobjects={}))}(app||(app={}));var app;!function(t){var a;!function(t){var a=function(){function t(){}return t}();t.TrainServices=a}(a=t.dataobjects||(t.dataobjects={}))}(app||(app={}));