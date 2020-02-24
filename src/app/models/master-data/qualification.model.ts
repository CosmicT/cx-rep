import { ResponseBase } from '../response-base.model';
export class QualificationParameterModel {
    deleted: number;
    id: number;
    parameters: string;
    lockFlag: string;
    sub_Parameters: string;
    subParameters: string;
    parentType: number;
    constructor() {
        this.deleted = 0;
        this.id = 0;
        this.parameters = '';
        this.lockFlag = '';
        this.sub_Parameters = '';
        this.subParameters = '';
        this.parentType = 0;
    }
}
export class QualificationParameterModelWithResponse extends ResponseBase {
    data: Array<QualificationParameterModel>;
    constructor() {
        super();
        this.data = Array<QualificationParameterModel>();
    }
}
export class QualificationScaleModel {
    weightage: number;
    scale: string;
    id: number;
    qualificationid: number;
    parenttype: number;
    constructor() {
        this.weightage = 0;
        this.scale = '';
        this.id = 0;
        this.qualificationid = 0;
        this.parenttype = 0;
    }
}
export class QualificationScaleModelWithResponse extends ResponseBase {
    data: Array<QualificationScaleModel>;
    constructor() {
        super();
        this.data = Array<QualificationScaleModel>();
    }
}