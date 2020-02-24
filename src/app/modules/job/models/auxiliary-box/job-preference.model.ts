import { ResponseBase } from 'src/app/models/response-base.model';

export class JobPreferenceModel {
    id: number;
    jobid: string;
    preferedaccountid: string;
    preferedaccountname: string;
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
        this.preferedaccountid = '';
        this.preferedaccountname = '';
        this.createddate = '';
        this.deleted = 0;
        this.createdby = '';
        this.modifiedby = '';
        this.createdusername = '';
        this.modifiedusername = '';
        this.modifieddate = '';
    }
}
export class JobPrefenceModelWithResponse extends ResponseBase {
    data: Array<JobPreferenceModel>;
    constructor() {
        super();
        this.data = Array<JobPreferenceModel>();
    }
}