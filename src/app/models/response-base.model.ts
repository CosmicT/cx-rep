export class ResponseBase {
    success: boolean;
    message: string;
    numFound: number;
    data: any;
    constructor() {
        this.success = false;
        this.message = '';
        this.numFound = 0;
    }
}