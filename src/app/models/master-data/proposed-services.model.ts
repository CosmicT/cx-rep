import { ResponseBase } from '../response-base.model';
export class ProposedServiceModel {
    service_text: string;
    deleted: number;
    id: number;
    constructor() {
        this.service_text = '';
        this.deleted = 0;
        this.id = 0;
    }
}
export class ProposedServiceWithResponse extends ResponseBase {
    data: Array<ProposedServiceModel>;
    constructor() {
        super();
        this.data = Array<ProposedServiceModel>();
    }
}