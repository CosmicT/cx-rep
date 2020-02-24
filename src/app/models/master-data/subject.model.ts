import { ResponseBase } from '../response-base.model';
export class SubjectFieldModel {
    deleted: number;
    datemodified: string;
    createdby: string;
    name: string;
    modifiedby: string;
    datecreated: string;
    id: string;
    subjectid: number;
    constructor() {
        this.deleted = 0;
        this.datemodified = '';
        this.createdby = '';
        this.name = '';
        this.modifiedby = '';
        this.datecreated = '';
        this.id = '';
        this.subjectid = 0;
    }
}
export class SubjectFieldWithResponse extends ResponseBase {
    data: Array<SubjectFieldModel>;
    constructor() {
        super();
        this.data = Array<SubjectFieldModel>();
    }
}
export class TaskSubjectModel {
    deleted: number;
    datemodified: string;
    createdby: string;
    taskName: string;
    modifiedby: string;
    id: number;
    datecreated: string;
    parentId: number;
    parentType: string;
    constructor() {
        this.deleted = 0;
        this.datemodified = '';
        this.createdby = '';
        this.taskName = '';
        this.modifiedby = '';
        this.id = 0;
        this.datecreated = '';
        this.parentId = 0;
        this.parentType = '';
    }
}
export class TaskSubjectWithResponse extends ResponseBase {
    data: Array<TaskSubjectModel>;
    constructor() {
        super();
        this.data = Array<TaskSubjectModel>();
    }
}