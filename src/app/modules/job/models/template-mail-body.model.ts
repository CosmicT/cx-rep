import { ResponseBase } from 'src/app/models/response-base.model';

export class TemplateMailBodyModel {
    id: string;
    templateid: number;
    body: string;
    deleted: number;
    createddate: string;
    lastmodifieddate: string;
    modifiedby: string;
    createdby: string;
    createdusername: string;
    modifiedusername: string;
    constructor() {
        this.id = '';
        this.templateid = 0;
        this.body = '';
        this.deleted = 0;
        this.createddate = '';
        this.lastmodifieddate = '';
        this.modifiedby = '';
        this.createdby = '';
        this.createdusername = '';
        this.modifiedusername = '';
    }
}
export class TemplateMailBodyModelWithResponse extends ResponseBase {
    data: Array<TemplateMailBodyModel>;
    constructor() {
        super();
        this.data = Array<TemplateMailBodyModel>();
    }
}