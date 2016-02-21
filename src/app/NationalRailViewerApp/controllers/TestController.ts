namespace app.controllers {
    'use strict';

    export class TestController {
        static $inject: Array<string> = ['NationalRail'];
        constructor(private NationalRail: app.Interfaces.INationalRailService) {}

    }

    angular
        .module('nationalRailViewer')
        .controller('TestController', TestController);
}