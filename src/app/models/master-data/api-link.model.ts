import { ResponseBase } from '../response-base.model';
export class ApiLinkModel {
    password: string;
    deleted: number;
    clientid: number;
    port: number;
    link: string;
    description: string;
    type: string;
    applicationname: string;
    username: string;
    constructor() {
        this.password = '';
        this.deleted = 0;
        this.clientid = 0;
        this.port = 0;
        this.link = '';
        this.description = '';
        this.type = '';
        this.applicationname = '';
        this.username = '';
    }
}
export class ApiLinkWithResponse extends ResponseBase {
    data: Array<ApiLinkModel>;
    constructor() {
        super();
        this.data = Array<ApiLinkModel>();
    }
}