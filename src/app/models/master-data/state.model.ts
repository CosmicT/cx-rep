import { ResponseBase } from '../response-base.model';
export class StateModel {
    createdusername: string;
    deleted: number;
    createdby: string;
    createddate: string;
    name: string;
    modifieddate: string;
    modifiedby: string;
    id: number;
    statecode: number;
    modifiedusername: string;
    countryid: number;

    constructor() {

        this.createdusername = '';
        this.deleted = 0;
        this.createdby = '';
        this.createddate = '';
        this.name = '';
        this.modifieddate = '';
        this.modifiedby = '';
        this.id = 0;
        this.statecode = 0;
        this.modifiedusername = '';
        this.countryid = 0;
    }
}
export class StateModelWithResponse extends ResponseBase {
    data: Array<StateModel>;
    constructor() {
        super();
        this.data = Array<StateModel>();
    }
}