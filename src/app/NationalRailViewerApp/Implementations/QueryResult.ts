namespace Interfaces {
    export class QueryResult implements IQueryResult {
        constructor(public trainServices: ITrainServices) { }
    }
}
