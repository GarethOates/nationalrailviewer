/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../../../typings/app.d.ts" />

namespace App.Services {

    export class TrainServices implements ITrainServices {
        public origin: IJourney[];
        public destination: IJourney[];
        public generatedAt: Date;
        public currentOrigins: string;
        public currentDestinations: string;
        public sta: string;
        public eta: string;
        public platform: string;
        public operator: string;
        public operatorCode: string;
        public isCircularRoute: boolean;
        public filterLocationCancelled: boolean;
        public serviceType: number;
        public serviceID: string;
        public adhocAlerts: string;
    }

}