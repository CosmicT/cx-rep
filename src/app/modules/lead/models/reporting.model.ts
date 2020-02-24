import { ResponseBase } from 'src/app/models/response-base.model';

export class ReportingModel {
    name: string;
    id: string;
    accountname: string;
    status: string;
    constructor() {
        this.name = '';
        this.id = '';
        this.accountname = '';
        this.status = '';
    }
}
export class ReportingModelWithResponse extends ResponseBase {
    data: Array<ReportingModel>;
    constructor() {
        super();
        this.data = Array<ReportingModel>();
    }
}