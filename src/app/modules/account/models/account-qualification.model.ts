import { ResponseBase } from 'src/app/models/response-base.model';

export class AccountQualificationHistroyModel {
    accountid: string;
    anchorid: string;
    applicationtrackingsystem: string;
    createdby: string;
    createddate: string;
    createdusername: string;
    culteroforganization: string;
    deleted: number;
    domains: string;
    employee: string;
    employeeinindia: number;
    foundedyear: number;
    globallyemployeeno: number;
    globalofficess: string;
    globalturnover: string;
    infrastructureoforganization: string;
    inhouseattirationrate: string;
    ismanualtaleoupload: number;
    lastmodifieddate: string;
    liveposition: string;
    memberof: string;
    modeofbussiness: string;
    modifiedby: string;
    modifiedusername: string;
    noticebyout: string;
    numberofvendor: string;
    ownership: string;
    productcompany: string;
    rating: string;
    recruitmentteamsize: string;
    segments: string;
    senioopeningclosed: string;
    siccode: string;
    stockexchangelisting: string;
    taleouploadurl: string;
    taleourl: string;
    totalmendateclosed: string;
    typeofcompany: string;
    usingportal: string;
    vendorcode: string;
    locationbocitywise: string;
    proposedservice: string;
    qualificationweightage: string;
    constructor() {
        this.accountid = '';
        this.anchorid = '';
        this.applicationtrackingsystem = '';
        this.createdby = '';
        this.createddate = '';
        this.createdusername = '';
        this.culteroforganization = '';
        this.deleted = 0;
        this.domains = '';
        this.employee = '';
        this.employeeinindia = 0;
        this.foundedyear = 0;
        this.globallyemployeeno = 0;
        this.globalofficess = '';
        this.globalturnover = '';
        this.infrastructureoforganization = '';
        this.inhouseattirationrate = '';
        this.ismanualtaleoupload = 0;
        this.lastmodifieddate = '';
        this.liveposition = '';
        this.memberof = '';
        this.modeofbussiness = '';
        this.modifiedby = '';
        this.modifiedusername = '';
        this.noticebyout = '';
        this.numberofvendor = '';
        this.ownership = '';
        this.productcompany = '';
        this.rating = '';
        this.recruitmentteamsize = '';
        this.segments = '';
        this.senioopeningclosed = '';
        this.siccode = '';
        this.stockexchangelisting = '';
        this.taleouploadurl = '';
        this.taleourl = '';
        this.totalmendateclosed = '';
        this.typeofcompany = '';
        this.usingportal = '';
        this.vendorcode = '';
        this.locationbocitywise = '';
        this.proposedservice = '';
        this.qualificationweightage = '';
    }
}
export class AccountQualificationHistoryModelWithResponse extends ResponseBase {
    data: Array<AccountQualificationHistroyModel>;
    qualificationHistory: AccountQualificationHistroyModel;
    constructor() {
        super();
        this.data = Array<AccountQualificationHistroyModel>();
        this.qualificationHistory = new AccountQualificationHistroyModel();

    }
}
export class AccountQualificationHistoryAndQualificationParameterModel {
    childparameter: string;
    createdby: string;
    createddate: string;
    createdusername: string;
    deleted: number;
    id: number;
    parameterid: number;
    parametername: string;
    parameterscaleid: number;
    parentid: string;
    parenttype: string;
    scaletext: string;
    weightage: number;
    constructor() {
        this.childparameter = '';
        this.createdby = '';
        this.createddate = '';
        this.createdusername = '';
        this.deleted = 0;
        this.id = 0;
        this.parameterid = 0;
        this.parametername = '';
        this.parameterscaleid = 0;
        this.parentid = '';
        this.parenttype = '';
        this.scaletext = '';
        this.weightage = 0;
    }
}