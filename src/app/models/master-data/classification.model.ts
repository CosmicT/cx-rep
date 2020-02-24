import { ResponseBase } from '../response-base.model';
export class ClassificationModel {
    name: string;
    datecreated: string;
    deleted: number;
    id: number;
    datemodified: string;
    constructor() {
        this.name = '';
        this.datecreated = '';
        this.deleted = 0;
        this.id = 0;
        this.datemodified = '';
    }
}
export class ClassificationWithResponse extends ResponseBase {
    data: Array<ClassificationModel>;
    constructor() {
        super();
        this.data = Array<ClassificationModel>();
    }
}
export class SubClassificationModel {
    name: string;
    id: number;
    classificationname: string;
    classficationid: number;
    constructor() {
        this.name = '';
        this.id = 0;
        this.classificationname = '';
        this.classficationid = 0;
    }
}
export class SubClassificationModelWithResponse extends ResponseBase {
    data: Array<SubClassificationModel>;
    constructor() {
        super();
        this.data = Array<SubClassificationModel>();
    }
}
export class SuperClassficationModel {
    supclassname: string;
    subclassname: string;
    supclassid: number;
    subclassficationid: number;
    constructor() {
        this.supclassname = '';
        this.subclassname = '';
        this.supclassid = 0;
        this.subclassficationid = 0;
    }
}
export class SuperClassficationModelWithResponse extends ResponseBase {
    data: Array<SuperClassficationModel>;
    constructor() {
        super();
        this.data = Array<SuperClassficationModel>();
    }
}