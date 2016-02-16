(function () {
    angular.module("nationalRailViewer").config(configure);

    function configure($routeProvider) {
        $routeProvider.when("/:City", {
            templateUrl: "public/views/main.html",
            controller: "MainController",
            controllerAs: "vm"
        }).otherwise({
            redirectTo: "/Aberdeen"
        });
    }
} ());