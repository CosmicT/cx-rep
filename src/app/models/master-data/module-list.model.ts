import { ResponseBase } from '../response-base.model';
export class ModuleListModel {
    moduleName: string;
    deleted: number;
    module_name: string;
    id: number;
    lock_flag: number;
    constructor() {
        this.moduleName = '';
        this.deleted = 0;
        this.module_name = '';
        this.id = 0;
        this.lock_flag = 0;
    }
}
export class ModuleListWithResponse extends ResponseBase {
    data: Array<ModuleListModel>;
    constructor() {
        super();
        this.data = Array<ModuleListModel>();
    }
}