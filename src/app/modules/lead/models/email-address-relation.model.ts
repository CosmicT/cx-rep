import { ResponseBase } from 'src/app/models/response-base.model';

export class EmailAddressRelationModel {
    createdby: string;
    createdusername: string;
    emailaddress: string;
    isopted: number;
    isprimaryaddress: number;
    isvalidmail: number;
    modifiedby: string;
    modifiedusername: string;
    parentid: string;
    parenttype: string;
    constructor() {
        this.createdby = '';
        this.createdusername = '';
        this.emailaddress = '';
        this.isopted = 0;
        this.isprimaryaddress = 0;
        this.isvalidmail = 0;
        this.modifiedby = '';
        this.modifiedusername = '';
        this.parentid = '';
        this.parenttype = '';
    }
}
export class EmailAddressRelationModelWithResponse extends ResponseBase {
    data: Array<EmailAddressRelationModel>;
    constructor() {
        super();
        this.data = Array<EmailAddressRelationModel>();
    }
}