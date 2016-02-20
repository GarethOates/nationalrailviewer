/// <reference path="../../../../typings/tsd.d.ts" />

module App.Services {

    export class Journey implements IJourney {
        public locationName: string;
        public crs: string;
        public via: string;
        public futureChangeTo: string;
        public assocIsCancelled: boolean;
    }

}