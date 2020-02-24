import { ResponseBase } from '../response-base.model';
export class CountryModel {
    createdusername: string;
    createddate: string;
    validationdigit: number;
    countrycode: number;
    modifieddate: string;
    currencycode: string;
    modifiedusername: string;
    deleted: number;
    createdby: string;
    name: string;
    modifiedby: string;
    id: number;
    constructor() {
        this.createdusername = '';
        this.createddate = '';
        this.validationdigit = 0;
        this.countrycode = 0;
        this.modifieddate = '';
        this.currencycode = '';
        this.modifiedusername = '';
        this.deleted = 0;
        this.createdby = '';
        this.name = '';
        this.modifiedby = '';
        this.id = 0;
    }
}
export class CountryWithResponse extends ResponseBase {
    data: Array<CountryModel>;
    constructor() {
        super();
        this.data = Array<CountryModel>();
    }
}