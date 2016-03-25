/// <reference path="../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../typings/app.d.ts" />
describe("NationalRailService Service", function() {
    var http: ng.IHttpService;

    beforeEach(inject(function($http: ng.IHttpService) {
        http = $http;
    }));

    var Service: app.services.NationalRailService = new app.services.NationalRailService(http);

    it("Should have a function called getDepartures", () => {
        expect(Service.getDepartures).toBeDefined();
    });

    it("Should have a function called getArrivals", () => {
        expect(Service.getArrivals).toBeDefined();
    });
});