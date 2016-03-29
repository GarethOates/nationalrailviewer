/// <reference path="../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../typings/app.d.ts" />
describe("MainController Controller", function() {
    var http: ng.IHttpService;
    var httpbackend: ng.IHttpBackendService;
    var interval: ng.IIntervalService;
    var routeParams: app.Interfaces.IParameters;
    var service: app.Interfaces.INationalRailService;
    
    beforeEach(angular.mock.module("nationalRailViewer"));
    
    beforeEach(inject(function($http: ng.IHttpService, $httpBackend: ng.IHttpBackendService, 
                                $interval: ng.IIntervalService, 
                                $routeParams: app.Interfaces.IParameters) {
        httpbackend = $httpBackend;
        interval = $interval;
        http = $http;
        
        routeParams = $routeParams;
        routeParams.City = "aberdeen";        
        
        httpbackend.when("GET", "/departures/aberdeen").respond([{}]); 
        httpbackend.when("GET", "/arrivals/aberdeen").respond([{}]);
        
        service = new app.services.NationalRailService(http);   
             
    }));
    
    // it("Should GET departures", () => { 
    //     httpbackend.expectGET("/departures/aberdeen");
    //     var controller: app.Interfaces.IMainController = 
    //     new app.controllers.MainController(service, interval, routeParams);
    //     httpbackend.flush();
    // });    
    
    // it("Should GET arrivals", () => {
    //     httpbackend.expectGET("/arrivals/aberdeen");
    //     var controller: app.Interfaces.IMainController =
    //     new app.controllers.MainController(service, interval, routeParams);
    //     httpbackend.flush();
    //  });
});