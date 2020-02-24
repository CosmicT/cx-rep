import { ResponseBase } from 'src/app/models/response-base.model';

export class SearchUserModel {
    name: string;
    id: string;
    username: string;
    constructor() {
        this.name = '';
        this.id = '';
        this.username = '';
    }
}
export class SearchUserModelWithResponse extends ResponseBase {
    data: Array<SearchUserModel>;
    constructor() {
        super();
        this.data = Array<SearchUserModel>();
    }
}