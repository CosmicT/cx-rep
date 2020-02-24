import { ResponseBase } from '../response-base.model';
export class NoticeByOutModel {
    createdusername: string;
    deleted: number;
    noticetext: string;
    createdby: string;
    createddate: string;
    modifieddate: string;
    modifiedby: string;
    id: number;
    modifiedusername: string;
    constructor() {
        this.createdusername = '';
        this.deleted = 0;
        this.noticetext = '';
        this.createdby = '';
        this.createddate = '';
        this.modifieddate = '';
        this.modifiedby = '';
        this.id = 0;
        this.modifiedusername = '';
    }
}
export class NoticeByOutWithResponse extends ResponseBase {
    data: Array<NoticeByOutModel>;
    constructor() {
        super();
        this.data = Array<NoticeByOutModel>();
    }
}