(function () {
    function configure($routeProvider) {
        $routeProvider.when("/:City", {
            templateUrl: "angular/views/main.html",
            controller: "MainController",
            controllerAs: "vm"
        }).otherwise({
            redirectTo: "/Aberdeen"
        });
    }
    configure.$inject = ['$routeProvider'];
    angular.module("nationalRailViewer").config(configure);
} ());