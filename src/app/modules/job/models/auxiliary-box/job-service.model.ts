import { ResponseBase } from 'src/app/models/response-base.model';

export class JobServiceModel {
    id: number;
    jobid: string;
    servicesid: number;
    servicesname: string;
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
        this.servicesid = 0;
        this.servicesname = '';
        this.createddate = '';
        this.deleted = 0;
        this.createdby = '';
        this.modifiedby = '';
        this.createdusername = '';
        this.modifiedusername = '';
        this.modifieddate = '';
    }
}
export class JobServiceModelWithResponse extends ResponseBase {
    data: Array<JobServiceModel>;
    constructor() {
        super();
        this.data = Array<JobServiceModel>();
    }
}