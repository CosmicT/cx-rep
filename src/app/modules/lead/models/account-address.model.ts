import { ResponseBase } from 'src/app/models/response-base.model';

export class AccountAddressModel {
    name: string;
    fulladdress: string;
    id: string;
    constructor() {
        this.name = '';
        this.fulladdress = '';
        this.id = '';
    }
}
export class AccountAddressModelWithResponse extends ResponseBase {
    data: Array<AccountAddressModel>;
    constructor() {
        super();
        this.data = Array<AccountAddressModel>();
    }
}
