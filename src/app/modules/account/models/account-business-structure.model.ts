import { ResponseBase } from 'src/app/models/response-base.model';
export class AccountBusinessStructureModel {
    id: string;
    accountid: string;
    parentid: string;
    division: string;
    createddate: string;
    lastmodifieddate: string;
    createdby: string;
    modifiedby: string;
    createdusername: string;
    modifiedusername: string;
    deleted: string;
    constructor() {
        this.id = '';
        this.accountid = '';
        this.parentid = '';
        this.division = '';
        this.createddate = '';
        this.lastmodifieddate = '';
        this.createdby = '';
        this.modifiedby = '';
        this.createdusername = '';
        this.modifiedusername = '';
        this.deleted = '';
    }
}
export class AccountBusinessStructureModelWithResponse extends ResponseBase {
    data: Array<AccountBusinessStructureModel>;
    constructor() {
        super();
        this.data = Array<AccountBusinessStructureModel>();
    }
}