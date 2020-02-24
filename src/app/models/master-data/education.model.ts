import { ResponseBase } from '../response-base.model';
export class EducationGroupModel {
    GroupTitle: string;
    id: number;
    EducationGroupDescription: string;
    constructor() {
        this.GroupTitle = '';
        this.id = 0;
        this.EducationGroupDescription = '';
    }
}
export class EducationGroupWithResponse extends ResponseBase {
    data: Array<EducationGroupModel>;
    constructor() {
        super();
        this.data = Array<EducationGroupModel>();
    }
}
export class EducationGroupDetailModel {
    EducationGroupID: number;
    education_groupid: number;
    EducationID: number;
    lock_flag: number;
    rid: number;
    constructor() {
        this.EducationGroupID = 0;
        this.education_groupid = 0;
        this.EducationID = 0;
        this.lock_flag = 0;
        this.rid = 0;
    }
}
export class EducationGroupDetailWithReponse extends ResponseBase {
    data: Array<EducationGroupDetailModel>;
    constructor() {
        super();
        this.data = Array<EducationGroupDetailModel>();

    }
}
export class EducationSpecializationDetailModel {
    EducationID: number;
    specialization_detid: number;
    lock_flag: number;
    SpecializationDetID: number;
    SpecializationID: number;
    constructor() {
        this.EducationID = 0;
        this.specialization_detid = 0;
        this.lock_flag = 0;
        this.SpecializationDetID = 0;
        this.SpecializationID = 0;
    }
}
export class EducationSpecializationDetailWithResponse extends ResponseBase {
    data: Array<EducationSpecializationDetailModel>;
    constructor() {
        super();
        this.data = Array<EducationSpecializationDetailModel>();
    }
}
export class EducationSpecializationTypeModel {
    Notes: string;
    SpecializationID: number;
    SpecializationTitle: string;
    constructor() {
        this.Notes = '';
        this.SpecializationID = 0;
        this.SpecializationTitle = '';
    }
}
export class EducationSpecializationTypeWithResponse extends ResponseBase {
    data: Array<EducationSpecializationTypeModel>;
    constructor() {
        super();
        this.data = Array<EducationSpecializationTypeModel>();
    }
}