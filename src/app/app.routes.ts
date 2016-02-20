/// <reference path="../../typings/tsd.d.ts" />

namespace app.Config {
    function configure($routeProvider: ng.route.IRouteProvider) {
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
}