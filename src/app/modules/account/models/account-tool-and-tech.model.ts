import { ResponseBase } from 'src/app/models/response-base.model';

export class AccountToolAndTechModel {
    id: number;
    accountid: string;
    tooltechid: number;
    tooltechname: string;
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
        this.tooltechid = 0;
        this.tooltechname = '';
        this.createddate = '';
        this.lastmodifieddate = '';
        this.createdby = '';
        this.modifiedby = '';
        this.createdusername = '';
        this.modifiedusername = '';
        this.deleted = 0;
    }
}
export class AccountToolAndTechModelWithResponse extends ResponseBase {
    data: Array<AccountToolAndTechModel>;
    constructor() {
        super();
        this.data = Array<AccountToolAndTechModel>();
    }
}