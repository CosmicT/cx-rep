import { ResponseBase } from 'src/app/models/response-base.model';

export class JobProductModel {
    id: number;
    jobid: string;
    prductsid: number;
    prductsname: string;
    createddate: string;
    deleted: number;
    createdby: string;
    modifiedby: string;
    createdusername: string;
    modifiedusername: string;
    modifieddate: string;
    constructor() {
        this.id = 0;
        this.jobid = '';
        this.prductsid = 0;
        this.prductsname = '';
        this.createddate = '';
        this.deleted = 0;
        this.createdby = '';
        this.modifiedby = '';
        this.createdusername = '';
        this.modifiedusername = '';
        this.modifieddate = '';
    }
}
export class JobProductMOdelWithResponse extends ResponseBase {
    data: Array<JobProductModel>;
    constructor() {
        super();
        this.data = Array<JobProductModel>();
    }
}