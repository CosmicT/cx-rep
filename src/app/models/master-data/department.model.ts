import { ResponseBase } from '../response-base.model';

export class DepartmentModel {
    name: string;
    id: number;
    created_date: string;
    isdeleted: number;
    constructor() {
        this.name = '';
        this.id = 0;
        this.created_date = '';
        this.isdeleted = 0;
    }
}
export class DepartmentWithResponse extends ResponseBase {
    data: Array<DepartmentModel>;
    constructor() {
        super();
        this.data = Array<DepartmentModel>();
    }
}