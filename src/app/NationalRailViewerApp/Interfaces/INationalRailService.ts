/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../../../typings/app.d.ts" />

namespace app.Interface {
    'use-strict';
    
   export interface INationalRailService {
        getDepartures(city: String): ng.IPromise<app.Interface.IQueryResult>;
        getArrivals(city: String): ng.IPromise<app.Interface.IQueryResult>;
    }
}