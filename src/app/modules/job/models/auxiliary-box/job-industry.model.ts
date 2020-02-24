import { ResponseBase } from 'src/app/models/response-base.model';

export class JobIndustryModel {
    id: number;
    jobid: string;
    industryid: number;
    industryname: string;
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
        this.industryid = 0;
        this.industryname = '';
        this.createddate = '';
        this.deleted = 0;
        this.createdby = '';
        this.modifiedby = '';
        this.createdusername = '';
        this.modifiedusername = '';
        this.modifieddate = '';
    }
}
export class JobIndustryModelWithResponse extends ResponseBase {
    data: Array<JobIndustryModel>;
    constructor() {
        super();
        this.data = Array<JobIndustryModel>();
    }
}