/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../../../typings/app.d.ts" />

module App.Services {

    export class TrainServices implements ITrainServices {
        public origin: IJourney[];
        public destination: IJourney[];
        public generatedAt: Date;
        currentOrigins: string;
        currentDestinations: string;
        sta: string;
        eta: string;
        platform: string;
        operator: string;
        operatorCode: string;
        isCircularRoute: boolean;
        filterLocationCancelled: boolean;
        serviceType: number;
        serviceID: string;
        adhocAlerts: string;
    }

}