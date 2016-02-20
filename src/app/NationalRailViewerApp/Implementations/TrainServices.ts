/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../../../typings/app.d.ts" />

namespace app.TrainServices {

    export class TrainServices implements app.Interface.ITrainServices {
        public origin: app.Interface.IJourney[];
        public destination: app.Interface.IJourney[];
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