describe("NationalRailService Service", function() {
    var http;
    beforeEach(inject(function ($http) {
        http = $http;
    }));
    var Service = new app.services.NationalRailService(http);
    it("Should have a function called getDepartures", function () {
        expect(Service.getDepartures).toBeDefined();
    });
    it("Should have a function called getArrivals", function () {
        expect(Service.getArrivals).toBeDefined();
    });
});
