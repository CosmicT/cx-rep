import { ResponseBase } from '../response-base.model';
export class IndustryModel {
    industry: string;
    deleted: number;
    id: number;
    constructor() {
        this.industry = '';
        this.deleted = 0;
        this.id = 0;
    }
}
export class IndustryWithResponse extends ResponseBase {
    data: Array<IndustryModel>;
    constructor() {
        super();
        this.data = Array<IndustryModel>();
    }
}
export class IndustryGroupModel {
    industry_group: string;
    deleted: number;
    id: number;
    constructor() {
        this.industry_group = '';
        this.deleted = 0;
        this.id = 0;
    }
}
export class IndustryGroupWithResponse extends ResponseBase {
    data: Array<IndustryGroupModel>;
    constructor() {
        super();
        this.data = Array<IndustryGroupModel>();
    }
}