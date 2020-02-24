import { ResponseBase } from '../response-base.model';

export class ApplicationTrackingModel {
    createdusername: string;
    deleted: number;
    createdby: string;
    createddate: string;
    lastmodifieddate: string;
    name: string;
    modifiedby: string;
    id: number;
    modifiedusername: string;
    constructor() {
        this.createdusername = '';
        this.deleted = 0;
        this.createdby = '';
        this.createddate = '';
        this.lastmodifieddate = '';
        this.name = '';
        this.modifiedby = '';
        this.id = 0;
        this.modifiedusername = '';
    }
}
export class ApplicationTrackingWithResponse extends ResponseBase {
    data: Array<ApplicationTrackingModel>;
    constructor() {
        super();
        this.data = Array<ApplicationTrackingModel>();
    }
}