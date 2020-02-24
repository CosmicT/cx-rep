import { ResponseBase } from '../response-base.model';
export class FunctionalModel {
    createdusername: string;
    deleted: number;
    createddate: string;
    name: string;
    modifieddate: string;
    id: number;
    modifiedusername: string;
    constructor() {
        this.createdusername = '';
        this.deleted = 0;
        this.createddate = '';
        this.name = '';
        this.modifieddate = '';
        this.id = 0;
        this.modifiedusername = '';
    }
}
export class FunctionalWithResponse extends ResponseBase {
    data: Array<FunctionalModel>;
    constructor() {
        super();
        this.data = Array<FunctionalModel>();
    }
}
export class FunctionalGroupModel {
    createdusername: string;
    deleted: number;
    createddate: string;
    name: string;
    modifieddate: string;
    id: number;
    modifiedusername: string;
    constructor() {
        this.createdusername = '';
        this.deleted = 0;
        this.createddate = '';
        this.name = '';
        this.modifieddate = '';
        this.id = 0;
        this.modifiedusername = '';
    }
}
export class FunctionalGroupWithResponse extends ResponseBase {
    data: Array<FunctionalGroupModel>;
    constructor() {
        super();
        this.data = Array<FunctionalGroupModel>();
    }
}
export class SubFunctionalModel {
    lockFlag: string;
    name: string;
    functionalid: number;
    createdusername: string;
    modifiedusername: string;
    createddate: string;
    modifieddate: string;
    deleted: number;
    id: number;
    constructor() {
        this.lockFlag = '';
        this.name = '';
        this.functionalid = 0;
        this.createdusername = '';
        this.modifiedusername = '';
        this.createddate = '';
        this.modifieddate = '';
        this.deleted = 0;
        this.id = 0;
    }
}
export class SubFunctionalModelWithResponse extends ResponseBase {
    data: Array<SubFunctionalModel>;
    constructor() {
        super();
        this.data = Array<SubFunctionalModel>();
    }
}
export class SuperFunctionalModel {
    lockFlag: string;
    supfunctionalname: string;
    subfunctionalid: number;
    functionalid: number;
    createdusername: string;
    modifiedusername: string;
    createddate: string;
    modifieddate: string;
    deleted: number;
    id: number;
    constructor() {
        this.lockFlag = '';
        this.supfunctionalname = '';
        this.subfunctionalid = 0;
        this.functionalid = 0;
        this.createdusername = '';
        this.modifiedusername = '';
        this.createddate = '';
        this.modifieddate = '';
        this.deleted = 0;
        this.id = 0;
    }
}
export class SuperFunctionalModelWithResponse extends ResponseBase {
    data: Array<SuperFunctionalModel>;
    constructor() {
        super();
        this.data = Array<SuperFunctionalModel>();
    }
}