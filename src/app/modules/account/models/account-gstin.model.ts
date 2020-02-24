import { ResponseBase } from 'src/app/models/response-base.model';

export class AccountGstinModel {
    accountid: string;
    accountname: string;
    address: string;
    addressid: string;
    createdby: string;
    createddate: string;
    createdusername: string;
    deleted: number;
    gstinnumber: string;
    id: string;
    modifiedby: string;
    modifieddate: string;
    modifiedusername: string;
    statecode: string;
    statename: string;
    constructor() {
        this.accountid = '';
        this.accountname = '';
        this.address = '';
        this.addressid = '';
        this.createdby = '';
        this.createddate = '';
        this.createdusername = '';
        this.deleted = 0;
        this.gstinnumber = '';
        this.id = '';
        this.modifiedby = '';
        this.modifieddate = '';
        this.modifiedusername = '';
        this.statecode = '';
        this.statename = '';
    }
}
export class AccountGstinModelWithResponse extends ResponseBase {
    data: Array<AccountGstinModel>;
    constructor() {
        super();
        this.data = Array<AccountGstinModel>();
    }
}