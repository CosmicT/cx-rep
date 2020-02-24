import { ResponseBase } from 'src/app/models/response-base.model';

export class AccountProcessModel {
    id: number;
    accountid: string;
    processid: number;
    processname: string;
    createddate: string;
    lastmodifieddate: string;
    createdby: string;
    modifiedby: string;
    createdusername: string;
    modifiedusername: string;
    deleted: number;
    constructor() {
        this.id = 0;
        this.accountid = '';
        this.processid = 0;
        this.processname = '';
        this.createddate = '';
        this.lastmodifieddate = '';
        this.createdby = '';
        this.modifiedby = '';
        this.createdusername = '';
        this.modifiedusername = '';
        this.deleted = 0;
    }
}
export class AccountProcessModelWithResponse extends ResponseBase {
    data: Array<AccountProcessModel>;
    constructor() {
        super();
        this.data = Array<AccountProcessModel>();
    }
}