import { ResponseBase } from '../response-base.model';
export class CompanyTypeModel {
    createdusername: string;
    deleted: number;
    createdby: string;
    createddate: string;
    lastmodifieddate: string;
    name: string;
    modifiedby: string;
    id: number;
    lock_flag: number;
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
        this.lock_flag = 0;
        this.modifiedusername = '';
    }
}
export class CompanyTypeWithResponse extends ResponseBase {
    data: Array<CompanyTypeModel>;
    constructor() {
        super();
        this.data = Array<CompanyTypeModel>();
    }
}