import { ResponseBase } from 'src/app/models/response-base.model';

export class ClientSheetModel {
    clientsheetid: number;
    id: number;
    candidatecoloum: string;
    resumecolid: number;
    constructor() {
        this.clientsheetid = 0;
        this.id = 0;
        this.candidatecoloum = '';
        this.resumecolid = 0;
    }
}
export class ClientSheetModelWithResponse extends ResponseBase {
    data: Array<ClientSheetModel>;
    constructor() {
        super();
        this.data = Array<ClientSheetModel>();
    }
}