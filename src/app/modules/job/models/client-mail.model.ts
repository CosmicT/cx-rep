import { ResponseBase } from 'src/app/models/response-base.model';

export class ClientMailModel {
    contactname: string;
    accountid: string;
    emailaddress: string;
    id: string;
    parentid: string;
    constructor() {
        this.contactname = '';
        this.accountid = '';
        this.emailaddress = '';
        this.id = '';
        this.parentid = '';
    }
}
export class ClientMailModelWithResponse extends ResponseBase {
    data: Array<ClientMailModel>;
    constructor() {
        super();
        this.data = Array<ClientMailModel>();
    }
}