/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../../../typings/app.d.ts" />

namespace App.Services {
    'use-strict';
    
    export interface IJourney {
        locationName: string;
        crs: string;
        via: string;
        futureChangeTo: string;
        assocIsCancelled: boolean;
    }
    
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
    
    export interface IQueryResult {
        trainServices: ITrainServices;
    }
}