(function () {
    angular.module("nationalRailViewer").config(configure);

    function configure($routeProvider) {
        $routeProvider.when("/:City", {
            templateUrl: "main.html",
            controller: "MainController",
            controllerAs: "vm"
        }).otherwise({
            redirectTo: "/Aberdeen"
        });
    }
} ());