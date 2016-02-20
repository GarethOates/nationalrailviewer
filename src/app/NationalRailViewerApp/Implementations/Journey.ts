/// <reference path="../../../../typings/tsd.d.ts" />

namespace app.Journey {

    export class Journey implements app.Interface.IJourney {
        public locationName: string;
        public crs: string;
        public via: string;
        public futureChangeTo: string;
        public assocIsCancelled: boolean;
    }

}