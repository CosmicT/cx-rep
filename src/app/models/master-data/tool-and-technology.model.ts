import { ResponseBase } from '../response-base.model';
export class ToolAndTechnologyModel {
    deleted: number;
    created_user: string;
    date_modified: string;
    date_created: string;
    service_id: number;
    product_id: string;
    id: number;
    tools_tech_name: string;
    constructor() {
        this.deleted = 0;
        this.created_user = '';
        this.date_modified = '';
        this.date_created = '';
        this.service_id = 0;
        this.product_id = '';
        this.id = 0;
        this.tools_tech_name = '';
    }
}
export class ToolAndTechnologyWithResponse extends ResponseBase {
    data: Array<ToolAndTechnologyModel>;
    constructor() {
        super();
        this.data = Array<ToolAndTechnologyModel>();
    }
}