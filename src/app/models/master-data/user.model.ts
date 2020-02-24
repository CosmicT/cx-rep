import { ResponseBase } from '../response-base.model';
export class UserModel {
    firstname: string;
    createddate: string;
    timezone: string;
    modifieddate: string;
    modifiedusername: string;
    passwordHash: string;
    isadmin: number;
    createdby: string;
    id: string;
    createdusername: string;
    emailid: string;
    workingshift: string;
    lastname: string;
    deleted: number;
    modifiedby: string;
    isportalaccess: string;
    status: string;
    username: string;
    lockFlag: string;
    recruitmentid: string;
    mobilenumber: string;
    callid: string;
    city: string;
    department: string;
    biomatricid: number;
    dateofjoining: string;
    dateofexit: string;
    didnumber: number;
    title: string;
    phonemobile: string;
    phonehome: string;
    ispublish: string;
    autoassign: string;
    constructor() {
        this.firstname = '';
        this.createddate = '';
        this.timezone = '';
        this.modifieddate = '';
        this.modifiedusername = '';
        this.passwordHash = '';
        this.isadmin = 0;
        this.createdby = '';
        this.id = '';
        this.createdusername = '';
        this.emailid = '';
        this.workingshift = '';
        this.lastname = '';
        this.deleted = 0;
        this.modifiedby = '';
        this.isportalaccess = '';
        this.status = '';
        this.username = '';
        this.lockFlag = '';
        this.recruitmentid = '';
        this.mobilenumber = '';
        this.callid = '';
        this.city = '';
        this.department = '';
        this.biomatricid = 0;
        this.dateofjoining = '';
        this.dateofexit = '';
        this.didnumber = 0;
        this.title = '';
        this.phonemobile = '';
        this.phonehome = '';
        this.ispublish = '';
        this.autoassign = '';
    }
}
export class UserModelWithResponse extends ResponseBase {
    data: Array<UserModel>;
    constructor() {
        super();
        this.data = Array<UserModel>();
    }
}