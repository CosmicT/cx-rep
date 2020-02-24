import { ResponseBase } from 'src/app/models/response-base.model';

export class AccountIndustryModel {
    id: number;
    accountid: string;
    industryid: number;
    industryname: string;
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
        this.industryid = 0;
        this.industryname = '';
        this.createddate = '';
        this.lastmodifieddate = '';
        this.createdby = '';
        this.modifiedby = '';
        this.createdusername = '';
        this.modifiedusername = '';
        this.deleted = 0;
    }
}
export class AccountIndustryWithResponse extends ResponseBase {
    data: Array<AccountIndustryModel>;
    constructor() {
        super();
        this.data = Array<AccountIndustryModel>();
    }
}