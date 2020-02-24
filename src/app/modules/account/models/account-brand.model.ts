import { ResponseBase } from 'src/app/models/response-base.model';

export class AccountBrandModel {
    id: number;
    parentid: string;
    brandname: string;
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
        this.brandname = '';
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
export class AccountBrandWithResponse extends ResponseBase {
    data: Array<AccountBrandModel>;
    constructor() {
        super();
        this.data = Array<AccountBrandModel>();
    }
}