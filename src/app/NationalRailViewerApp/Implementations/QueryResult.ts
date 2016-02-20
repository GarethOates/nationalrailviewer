/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../../../typings/app.d.ts" />

module App.Services {
    'use-strict';
    export class QueryResult implements IQueryResult {       
        constructor(public trainServices: ITrainServices) {}
    }
}