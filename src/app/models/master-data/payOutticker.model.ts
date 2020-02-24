import { ResponseBase } from '../response-base.model';
export class PayOutTickerModel {
    payout: string;
    date_entered: string;
    deleted: number;
    id: number;
    created_by: string;
    constructor() {
        this.payout = '';
        this.date_entered = '';
        this.deleted = 0;
        this.id = 0;
        this.created_by = '';
    }
}
export class PayOutTickerWithResponse extends ResponseBase {
    data: Array<PayOutTickerModel>;
    constructor() {
        super();
        this.data = Array<PayOutTickerModel>();
    }
}