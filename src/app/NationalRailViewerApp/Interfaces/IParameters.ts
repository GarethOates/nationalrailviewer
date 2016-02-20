/// <reference path="../../../../typings/tsd.d.ts" />

module App.Services {
    'use-strict';
 
    export interface IParameters extends ng.route.IRouteParamsService {
       City: string;
    }
    
}