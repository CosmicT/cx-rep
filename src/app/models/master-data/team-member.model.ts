import { ResponseBase } from '../response-base.model';

export class TeamMemberModel {
    createdusername: string;
    createddate: string;
    groupid: number;
    modifieddate: string;
    modifiedusername: string;
    userid: string;
    parentid: string;
    deleted: number;
    createdby: string;
    dateto: string;
    modifiedby: string;
    datefrom: string;
    id: number;
    parenttype: string;
    username: string;
    constructor() {
        this.createdusername = '';
        this.createddate = '';
        this.groupid = 0;
        this.modifieddate = '';
        this.modifiedusername = '';
        this.userid = '';
        this.parentid = '';
        this.deleted = 0;
        this.createdby = '';
        this.dateto = '';
        this.modifiedby = '';
        this.datefrom = '';
        this.id = 0;
        this.parenttype = '';
        this.username = '';
    }
}
export class TeamMemberModelWithResponse extends ResponseBase {
    data: Array<TeamMemberModel>;
    constructor() {
        super();
        this.data = Array<TeamMemberModel>();
    }
}