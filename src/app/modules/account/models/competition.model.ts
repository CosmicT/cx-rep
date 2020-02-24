import { ResponseBase } from 'src/app/models/response-base.model';
export class CompetitionModel {
    name: string;
    fulladdress: string;
    websiteurl: string;
    boardnumber: string;
    constructor() {
        this.name = '';
        this.fulladdress = '';
        this.websiteurl = '';
        this.boardnumber = '';
    }
}
export class CompetitionModelWithResponse extends ResponseBase {
    competition: Array<CompetitionModel>;
    data: CompetitionModel;
    constructor() {
        super();
        this.competition = Array<CompetitionModel>();
        this.data = new CompetitionModel();
    }
}