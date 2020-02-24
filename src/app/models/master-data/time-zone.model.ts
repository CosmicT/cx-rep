import { ResponseBase } from '../response-base.model';
export class TimeZoneModel {
    ID: number;
    Time_zone_name: string;
    Display_string: string;
    constructor() {
        this.ID = 0;
        this.Time_zone_name = '';
        this.Display_string = '';
    }
}
export class TimeZoneWithResponse extends ResponseBase {
    data: Array<TimeZoneModel>;
    constructor() {
        super();
        this.data = Array<TimeZoneModel>();
    }
}