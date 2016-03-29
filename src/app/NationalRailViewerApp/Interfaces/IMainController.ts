namespace app.Interfaces {
    export interface IMainController {
        city: string;
        departures: Interfaces.IQueryResult;
        arrivals: Interfaces.IQueryResult;
        error: string;
        time: number;
        GetData(): void;
    }
}