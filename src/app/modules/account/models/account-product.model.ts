import { ResponseBase } from 'src/app/models/response-base.model';

export class AccountProductModel {
    id: number;
    accountid: string;
    productid: number;
    productname: string;
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
        this.productid = 0;
        this.productname = '';
        this.createddate = '';
        this.lastmodifieddate = '';
        this.createdby = '';
        this.modifiedby = '';
        this.createdusername = '';
        this.modifiedusername = '';
        this.deleted = 0;
    }
}
export class AccountProductModelWithResponse extends ResponseBase {
    data: Array<AccountProductModel>;
    constructor() {
        super();
        this.data = Array<AccountProductModel>();
    }
}