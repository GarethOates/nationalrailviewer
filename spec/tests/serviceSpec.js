//// <reference path="../../typings/app.d.ts" />
//// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../../typings/jasmine/jasmine.d.ts" />
describe("NationalRailService Service", function () {
    var service;
    it("should have function called getDepartures", function () {
        expect(service.getDepartures).not.toBe(undefined);
    });
    it("should have function called getArrivals", function () {
        expect(service.getArrivals).not.toBe(undefined);
    });
});
