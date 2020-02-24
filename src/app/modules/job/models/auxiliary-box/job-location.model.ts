import { ResponseBase } from 'src/app/models/response-base.model';

export class JobLocationModel {
    id: number;
    createddate: string;
    jobid: string;
    addressid: string;
    locationaddress: string;
    deleted: number;
    createdby: string;
    modifiedby: string;
    createdusername: string;
    modifiedusername: string;
    modifieddate: string;
    lastmodifieddate: string;
    constructor() {
        this.id = 0;
        this.createddate = '';
        this.jobid = '';
        this.addressid = '';
        this.locationaddress = '';
        this.deleted = 0;
        this.createdby = '';
        this.modifiedby = '';
        this.createdusername = '';
        this.modifiedusername = '';
        this.modifieddate = '';
        this.lastmodifieddate = '';
    }
}
export class JobLocationModelWihtResponse extends ResponseBase {
    data: Array<JobLocationModel>;
    constructor() {
        super();
        this.data = Array<JobLocationModel>();
    }
}