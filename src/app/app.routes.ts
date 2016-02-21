namespace app.routes {
    function configure($routeProvider: ng.route.IRouteProvider) {
        $routeProvider.when("/:City", {
            templateUrl: "main.html",
            controller: "MainController",
            controllerAs: "vm"
        }).otherwise({
            redirectTo: "/Aberdeen"
        });
    }
    configure.$inject = ['$routeProvider'];
    angular.module("nationalRailViewer").config(configure);
}