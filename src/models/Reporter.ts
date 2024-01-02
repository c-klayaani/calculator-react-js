import {Data} from './Data';

export class Reporter {
    error: boolean;
    data: Data[];
    constructor(reporter_Response: any){
        this.error = reporter_Response.error;
        this.data = reporter_Response.data.map(
            (dataResponse: any) => new Data(dataResponse)
        );
    }
}
