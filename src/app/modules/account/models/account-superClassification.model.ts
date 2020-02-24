import { ResponseBase } from 'src/app/models/response-base.model';

export class AccountSuperClassificationModel {
    id: number;
    accountid: string;
    superclassificationid: number;
    superclassificationname: string;
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
        this.superclassificationid = 0;
        this.superclassificationname = '';
        this.createddate = '';
        this.lastmodifieddate = '';
        this.createdby = '';
        this.modifiedby = '';
        this.createdusername = '';
        this.modifiedusername = '';
        this.deleted = 0;
    }
}
export class AccountSuperClassificationModelWithResponse extends ResponseBase {
    data: Array<AccountSuperClassificationModel>;
    constructor() {
        super();
        this.data = Array<AccountSuperClassificationModel>();
    }
}