namespace Interfaces {
    export interface INationalRailService {
        getDepartures(city: String): ng.IPromise<IQueryResult>;
        getArrivals(city: String): ng.IPromise<IQueryResult>;
    }
}