namespace app.dataobjects {
    export class Journey implements app.Interfaces.IJourney {
        public locationName: string;
        public crs: string;
        public via: string;
        public futureChangeTo: string;
        public assocIsCancelled: boolean;
    }
}