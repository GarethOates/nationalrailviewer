namespace app.dataobjects {
    export class QueryResult implements app.Interfaces.IQueryResult {
        constructor(public trainServices: app.Interfaces.ITrainServices) { }
    }
}
