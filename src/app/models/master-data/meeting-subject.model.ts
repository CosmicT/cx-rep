import { ResponseBase } from '../response-base.model';
export class MeetingSubjectModel {
    createdusername: string;
    deleted: number;
    createdby: string;
    lastmodifieddate: string;
    name: string;
    modifiedby: string;
    anchorname: string;
    id: number;
    subjecttype: number;
    anchorid: string;
    modifiedusername: string;
    constructor() {
        this.createdusername = '';
        this.deleted = 0;
        this.createdby = '';
        this.lastmodifieddate = '';
        this.name = '';
        this.modifiedby = '';
        this.anchorname = '';
        this.id = 0;
        this.subjecttype = 0;
        this.anchorid = '';
        this.modifiedusername = '';
    }
}
export class MeetingSubjectWithResponse extends ResponseBase {
    data: Array<MeetingSubjectModel>;
    constructor() {
        super();
        this.data = Array<MeetingSubjectModel>();
    }
}