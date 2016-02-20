namespace Interfaces {
    export interface ITrainServices {
        origin: IJourney[];
        destination: IJourney[];
        generatedAt: Date;
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