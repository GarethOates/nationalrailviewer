namespace app.dataobjects {
    export class TrainServices implements app.Interfaces.ITrainServices {
        public origin: app.Interfaces.IJourney[];
        public destination: app.Interfaces.IJourney[];
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