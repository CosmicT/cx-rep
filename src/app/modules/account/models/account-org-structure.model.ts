import { ResponseBase } from 'src/app/models/response-base.model';

export class AccountOrgStructureModel {
    ctcrange: string;
    createdusername: string;
    ctcfrominr: number;
    ctcfrom: number;
    ctcto: number;
    createddate: string;
    level: number;
    lastmodifieddate: string;
    ctctoinr: number;
    modifiedusername: string;
    industrydesignationlevel: string;
    jobgrade: string;
    accountid: string;
    expfrom: number;
    deleted: number;
    exprange: string;
    createdby: string;
    ctccurrency: string;
    modifiedby: string;
    designation: string;
    id: number;
    remarks: string;
    expto: number;
    constructor() {
        this.ctcrange = '';
        this.createdusername = '';
        this.ctcfrominr = 0;
        this.ctcfrom = 0;
        this.ctcto = 0;
        this.createddate = '';
        this.level = 0;
        this.lastmodifieddate = '';
        this.ctctoinr = 0;
        this.modifiedusername = '';
        this.industrydesignationlevel = '';
        this.jobgrade = '';
        this.accountid = '';
        this.expfrom = 0;
        this.deleted = 0;
        this.exprange = '';
        this.createdby = '';
        this.ctccurrency = '';
        this.modifiedby = '';
        this.designation = '';
        this.id = 0;
        this.remarks = '';
        this.expto = 0;
    }
}
export class AccountOrgStrucureModelWithResponse extends ResponseBase {
    data: Array<AccountOrgStructureModel>;
    constructor() {
        super();
        this.data = Array<AccountOrgStructureModel>();
    }
}