namespace app.Interfaces {
    export interface ITrainServices {
        origin: IJourney[];
        destination: IJourney[];
        generatedAt: Date;
        currentOrigins: string;
        currentDestinations: string;
        sta: string;
        eta: string;
        std: string;
        etd: string;
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