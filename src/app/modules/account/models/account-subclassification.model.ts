import { ResponseBase } from 'src/app/models/response-base.model';

export class AccountSubclassificationModel {
    id: number;
    accountid: string;
    subclassificationid: number;
    subclassificationname: string;
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
        this.subclassificationid = 0;
        this.subclassificationname = '';
        this.createddate = '';
        this.lastmodifieddate = '';
        this.createdby = '';
        this.modifiedby = '';
        this.createdusername = '';
        this.modifiedusername = '';
        this.deleted = 0;
    }
}
export class AccountSubclassificationModelWithResponse extends ResponseBase {
    data: Array<AccountSubclassificationModel>;
    constructor() {
        super();
        this.data = Array<AccountSubclassificationModel>();
    }
}