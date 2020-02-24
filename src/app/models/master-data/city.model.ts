import { ResponseBase } from '../response-base.model';
export class CityModel {
    createdusername: string;
    createddate: string;
    validationdigit: number;
    stateid: number;
    cityname: string;
    modifieddate: string;
    modifiedusername: string;
    countryid: number;
    deleted: number;
    citycode: number;
    createdby: string;
    modifiedby: string;
    id: number;
    constructor() {
        this.createdusername = '';
        this.createddate = '';
        this.validationdigit = 0;
        this.stateid = 0;
        this.cityname = '';
        this.modifieddate = '';
        this.modifiedusername = '';
        this.countryid = 0;
        this.deleted = 0;
        this.citycode = 0;
        this.createdby = '';
        this.modifiedby = '';
        this.id = 0;
    }
}
export class CityModelWithResponse extends ResponseBase {
    data: Array<CityModel>;
    constructor() {
        super();
        this.data = Array<CityModel>();
    }
}