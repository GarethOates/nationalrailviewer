/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../../../typings/app.d.ts" />

namespace App.Services {
    'use-strict';
    export class QueryResult implements IQueryResult {       
        constructor(public trainServices: ITrainServices) {}
    }
}