import { ResponseBase } from 'src/app/models/response-base.model';
export class AccountContactQualificationModel {
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
export class AccountContactQualificationModelWithResponse extends ResponseBase {
    data: Array<AccountContactQualificationModel>;
    constructor() {
        super();
        this.data = Array<AccountContactQualificationModel>();
    }
}