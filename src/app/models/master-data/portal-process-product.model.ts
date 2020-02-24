import { ResponseBase } from '../response-base.model';
export class PortalModel {
    attachcount: number;
    name: string;
    caption: string;
    id: number;
    timeout: number;
    constructor() {
        this.attachcount = 0;
        this.name = '';
        this.caption = '';
        this.id = 0;
        this.timeout = 0;
    }
}
export class PortalWithResponse extends ResponseBase {
    data: Array<PortalModel>;
    constructor() {
        super();
        this.data = Array<PortalModel>();
    }
}
export class ProcessModel {
    name: string;
    deleted: number;
    id: number;
    created_date: string;
    created_by: string;
    constructor() {
        this.name = '';
        this.deleted = 0;
        this.id = 0;
        this.created_date = '';
        this.created_by = '';
    }

}
export class ProcessWithResponse extends ResponseBase {
    data: Array<ProcessModel>;
    constructor() {
        super();
        this.data = Array<ProcessModel>();
    }
}
export class ProductModel {
    deleted: number;
    created_user: string;
    date_modified: string;
    date_created: string;
    id: number;
    product_name: string;
    constructor() {
        this.deleted = 0;
        this.created_user = '';
        this.date_modified = '';
        this.date_created = '';
        this.id = 0;
        this.product_name = '';
    }
}
export class ProductWithResponse extends ResponseBase {
    data: Array<ProductModel>;
    constructor() {
        super();
        this.data = Array<ProductModel>();
    }
}