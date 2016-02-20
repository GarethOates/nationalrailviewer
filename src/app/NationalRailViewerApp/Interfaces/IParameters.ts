/// <reference path="../../../../typings/tsd.d.ts" />

namespace App.Services {
    'use-strict';
 
    export interface IParameters extends ng.route.IRouteParamsService {
       City: string;
    }
    
}