import { ResponseBase } from 'src/app/models/response-base.model';

export class AccountServiceModel {
    id: number;
    accountid: string;
    serviceid: number;
    servicename: string;
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
        this.serviceid = 0;
        this.servicename = '';
        this.createddate = '';
        this.lastmodifieddate = '';
        this.createdby = '';
        this.modifiedby = '';
        this.createdusername = '';
        this.modifiedusername = '';
        this.deleted = 0;
    }
}
export class AccountServiceModelWithResponse extends ResponseBase {
    data: Array<AccountServiceModel>;
    constructor() {
        super();
        this.data = Array<AccountServiceModel>();
    }
}