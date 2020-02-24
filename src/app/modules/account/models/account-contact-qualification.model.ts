import { ResponseBase } from 'src/app/models/response-base.model';

export class AccountContactQualificationModel {
    id: number;
    parentid: string;
    parameterid: number;
    parametername: string;
    childparameter: string;
    parameterscaleid: number;
    scaletext: string;
    weightage: number;
    parenttype: string;
    createddate: string;
    createdby: string;
    createdusername: string;
    deleted: number;
    constructor() {
        this.id = 0;
        this.parentid = '';
        this.parameterid = 0;
        this.parametername = '';
        this.childparameter = '';
        this.parameterscaleid = 0;
        this.scaletext = '';
        this.weightage = 0;
        this.parenttype = '';
        this.createddate = '';
        this.createdby = '';
        this.createdusername = '';
        this.deleted = 0;
    }
}
export class AccountContactQualificationModelWithResponse extends ResponseBase {
    data: Array<AccountContactQualificationModel>;
    constructor() {
        super();
        this.data = Array<AccountContactQualificationModel>();
    }
}