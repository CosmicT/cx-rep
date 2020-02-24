import { ResponseBase } from 'src/app/models/response-base.model';

export class UserRoleDetailsModel {
    mobilenumber: string;
    isadmin: number;
    roleaccessaction: Array<RoleAccessAction>;
    id: string;
    username: string;
    constructor() {
        this.mobilenumber = '';
        this.isadmin = 0;
        this.roleaccessaction = Array<RoleAccessAction>();
        this.id = '';
        this.username = '';
    }
}
export class RoleAccessAction {
    access: number;
    import: number;
    createddate: string;
    edit: number;
    roleid: string;
    modifieddate: string;
    duplicate: number;
    list: number;
    delete: number;
    view: number;
    deleted: number;
    merge: number;
    create: number;
    massupdate: number;
    id: string;
    activation: number;
    category: string;
    export: number;
    constructor() {
        this.access = 0;
        this.import = 0;
        this.createddate = '';
        this.edit = 0;
        this.roleid = '';
        this.modifieddate = '';
        this.duplicate = 0;
        this.list = 0;
        this.delete = 0;
        this.view = 0;
        this.deleted = 0;
        this.merge = 0;
        this.create = 0;
        this.massupdate = 0;
        this.id = '';
        this.activation = 0;
        this.category = '';
        this.export = 0;
    }
}
export class UserRoleDetailsModelWithResponse extends ResponseBase {
    data: UserRoleDetailsModel;
    constructor() {
        super();
        this.data = new UserRoleDetailsModel();
    }
}