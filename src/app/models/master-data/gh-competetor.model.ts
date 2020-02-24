import { ResponseBase } from '../response-base.model';
export class GhCompetetorModel {
    createdusername: string;
    datemodified: string;
    createdby: string;
    createddate: string;
    name: string;
    modifieddate: string;
    modifiedby: string;
    datecreated: string;
    id: number;
    modifiedusername: string;
    agencyname: string;
    constructor() {
        this.createdusername = '';
        this.datemodified = '';
        this.createdby = '';
        this.createddate = '';
        this.name = '';
        this.modifieddate = '';
        this.modifiedby = '';
        this.datecreated = '';
        this.id = 0;
        this.modifiedusername = '';
        this.agencyname = '';
    }
}
export class GhCompetetorWithResponse extends ResponseBase {
    data: Array<GhCompetetorModel>;
    constructor() {
        super();
        this.data = Array<GhCompetetorModel>();
    }
}