import { ResponseBase } from 'src/app/models/response-base.model';

export class AccountAliasModel {
    id: number;
    companyid: string;
    companyname: string;
    aliseaccountid: string;
    aliseaccountname: string;
    createdby: string;
    createdusername: string;
    modifiedby: string;
    modifiedusername: string;
    modifieddate: string;
    deleted: number;
    createddate: string;
    constructor() {
        this.id = 0;
        this.companyid = '';
        this.companyname = '';
        this.aliseaccountid = '';
        this.aliseaccountname = '';
        this.createdby = '';
        this.createdusername = '';
        this.modifiedby = '';
        this.modifiedusername = '';
        this.modifieddate = '';
        this.deleted = 0;
        this.createddate = '';
    }
}
export class AccountAliasModelWithResponse extends ResponseBase {
    data: Array<AccountAliasModel>;
    constructor() {
        super();
        this.data = Array<AccountAliasModel>();
    }
}