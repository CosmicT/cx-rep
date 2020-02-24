import { ResponseBase } from 'src/app/models/response-base.model';

export class AccountAddressModel {
    accountid: string;
    cityid: number;
    cityname: string;
    countryid: number;
    countryname: string;
    createdby: string;
    createddate: string;
    createdusername: string;
    deleted: number;
    fulladdress: string;
    id: string;
    isbillingaddress: number;
    isheadquarter: number;
    isprojectsite: number;
    isshippingaddress: number;
    lastmodifieddate: string;
    lat: string;
    lng: string;
    modifiedby: string;
    modifiedusername: string;
    phonecitycode: number;
    phonecountrycode: number;
    phonenumber: string;
    pincode: string;
    stateid: number;
    statename: string;
    status: number;
    streetaddress: string;
    constructor() {
        this.accountid = '';
        this.cityid = 0;
        this.cityname = '';
        this.countryid = 0;
        this.countryname = '';
        this.createdby = '';
        this.createddate = '';
        this.createdusername = '';
        this.deleted = 0;
        this.fulladdress = '';
        this.id = '';
        this.isbillingaddress = 0;
        this.isheadquarter = 0;
        this.isprojectsite = 0;
        this.isshippingaddress = 0;
        this.lastmodifieddate = '';
        this.lat = '';
        this.lng = '';
        this.modifiedby = '';
        this.modifiedusername = '';
        this.phonecitycode = 0;
        this.phonecountrycode = 0;
        this.phonenumber = '';
        this.pincode = '';
        this.stateid = 0;
        this.statename = '';
        this.status = 0;
        this.streetaddress = '';
    }
}
export class AccountAddressModelWithResponse extends ResponseBase {
    data: Array<AccountAddressModel>;
    constructor() {
        super();
        this.data = Array<AccountAddressModel>();
    }
}