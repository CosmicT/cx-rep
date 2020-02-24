import { ResponseBase } from '../response-base.model';
export class MailCredentialModel {
    createdusername: string;
    server: string;
    otpmail: string;
    datecreated: string;
    modifiedusername: string;
    url: string;
    password: string;
    deleted: number;
    datemodified: string;
    createdby: string;
    portnumber: string;
    modifiedby: string;
    id: number;
    username: string;
    constructor() {
        this.createdusername = '';
        this.server = '';
        this.otpmail = '';
        this.datecreated = '';
        this.modifiedusername = '';
        this.url = '';
        this.password = '';
        this.deleted = 0;
        this.datemodified = '';
        this.createdby = '';
        this.portnumber = '';
        this.modifiedby = '';
        this.id = 0;
        this.username = '';
    }
}
export class MailCredentialWithResponse extends ResponseBase {
    data: Array<MailCredentialModel>;
    constructor() {
        super();
        this.data = Array<MailCredentialModel>();
    }
}