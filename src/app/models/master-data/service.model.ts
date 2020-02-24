import { ResponseBase } from '../response-base.model';

export class ServiceModel {
    deleted: number;
    date_modified: string;
    created_user: string;
    service_name: string;
    date_created: string;
    id: number;
    constructor() {
        this.deleted = 0;
        this.date_modified = '';
        this.created_user = '';
        this.service_name = '';
        this.date_created = '';
        this.id = 0;
    }
}
export class ServiceWithResponse extends ResponseBase {
    data: Array<ServiceModel>;
    constructor() {
        super();
        this.data = Array<ServiceModel>();
    }
}