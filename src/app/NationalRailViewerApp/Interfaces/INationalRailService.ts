/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../../../typings/app.d.ts" />

namespace App.Services {
    'use-strict';
    
   export interface INationalRailService {
        getDepartures(city: String): ng.IPromise<IQueryResult>;
        getArrivals(city: String): ng.IPromise<IQueryResult>;
    }
}