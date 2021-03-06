import { ResponseBase } from 'src/app/models/response-base.model';

export class AccountPoachModel {
    id: number;
    parentid: string;
    accountid: string;
    name: string;
    createddate: string;
    lastmodifieddate: string;
    createdby: string;
    modifiedby: string;
    createdusername: string;
    modifiedusername: string;
    deleted: number;
    constructor() {
        this.id = 0;
        this.parentid = '';
        this.accountid = '';
        this.name = '';
        this.createddate = '';
        this.lastmodifieddate = '';
        this.createdby = '';
        this.modifiedby = '';
        this.createdusername = '';
        this.modifiedusername = '';
        this.deleted = 0;
    }
}
export class AccountPoachModelWithResponse extends ResponseBase {
    data: Array<AccountPoachModel>;
    constructor() {
        super();
        this.data = Array<AccountPoachModel>();
    }
}