//// <reference path="../../../../typings/tsd.d.ts" />

namespace app.Interfaces {
    export interface INationalRailService {
        getDepartures(city: String): ng.IPromise<IQueryResult>;
        getArrivals(city: String): ng.IPromise<IQueryResult>;
    }
}