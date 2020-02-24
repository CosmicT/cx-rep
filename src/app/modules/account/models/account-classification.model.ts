import { ResponseBase } from 'src/app/models/response-base.model';

export class AccountClassificationModel {
    id: number;
    accountid: string;
    classificationid: number;
    classificationname: string;
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
        this.classificationid = 0;
        this.classificationname = '';
        this.createddate = '';
        this.lastmodifieddate = '';
        this.createdby = '';
        this.modifiedby = '';
        this.createdusername = '';
        this.modifiedusername = '';
        this.deleted = 0;
    }
}
export class AccountClassificationModelWithResponse extends ResponseBase {
    data: Array<AccountClassificationModel>;
    constructor() {
        super();
        this.data = Array<AccountClassificationModel>();
    }
}