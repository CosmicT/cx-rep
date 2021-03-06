import { ResponseBase } from 'src/app/models/response-base.model';

export class AccountIndustryGroupModel {
    id: number;
    accountid: string;
    industrygroupid: number;
    industrygroupname: string;
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
        this.industrygroupid = 0;
        this.industrygroupname = '';
        this.createddate = '';
        this.lastmodifieddate = '';
        this.createdby = '';
        this.modifiedby = '';
        this.createdusername = '';
        this.modifiedusername = '';
        this.deleted = 0;
    }
}
export class AccountIndustryGroupModelWithResponse extends ResponseBase {
    data: Array<AccountIndustryGroupModel>;
    constructor() {
        super();
        this.data = Array<AccountIndustryGroupModel>();
    }
}