/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../../../typings/app.d.ts" />

namespace app.QueryResult {
    'use-strict';
    export class QueryResult implements app.Interface.IQueryResult {       
        constructor(public trainServices: app.Interface.ITrainServices) {}
    }
}