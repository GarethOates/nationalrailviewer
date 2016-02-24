namespace app.Interfaces {
    export interface IJourney {
        locationName: string;
        crs: string;
        via: string;
        futureChangeTo: string;
        assocIsCancelled: boolean;
    }
}