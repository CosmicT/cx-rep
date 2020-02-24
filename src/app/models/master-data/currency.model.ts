import { ResponseBase } from '../response-base.model';

export class CurrencyModel {
    id: number;
    currency: string;
    rate: number;
    constructor() {
        this.id = 0;
        this.currency = '';
        this.rate = 0;
    }
}
export class CurrencyModelWithResponse extends ResponseBase {
    data: Array<CurrencyModel>;
    constructor() {
        super();
        this.data = Array<CurrencyModel>();
    }
}