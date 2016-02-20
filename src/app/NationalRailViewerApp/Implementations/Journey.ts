namespace Interfaces {
    export class Journey implements IJourney {
        public locationName: string;
        public crs: string;
        public via: string;
        public futureChangeTo: string;
        public assocIsCancelled: boolean;
    }
}