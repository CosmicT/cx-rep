import { ResponseBase } from './response-base.model';
export class UserRoleModel {
    userid: number;
    username: string;
    mobileno: number;
    isadmin: boolean;
    constructor() {
        this.userid = 0;
        this.username = '';
        this.mobileno = 0;
        this.isadmin = false;
    }
}
export class UserModelWithResponse extends ResponseBase {
    data: UserRoleModel;
    constructor() {
        super();
        this.data = new UserRoleModel();
    }
}