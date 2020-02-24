import { ResponseBase } from 'src/app/models/response-base.model';

export class AccountDomainModel {
    accountid: string;
    createdby: string;
    createddate: string;
    createdusername: string;
    deleted: number;
    id: number;
    lastmodifieddate: string;
    modifiedby: string;
    modifiedusername: string;
    name: string;
    constructor() {
        this.accountid = '';
        this.createdby = '';
        this.createddate = '';
        this.createdusername = '';
        this.deleted = 0;
        this.id = 0;
        this.lastmodifieddate = '';
        this.modifiedby = '';
        this.modifiedusername = '';
        this.name = '';
    }
}
export class AccountDomainModelWithResponse extends ResponseBase {
    data: Array<AccountDomainModel>;
    constructor() {
        super();
        this.data = Array<AccountDomainModel>();
    }
}