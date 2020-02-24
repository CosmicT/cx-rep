export class PaginationModel {
    perPage: number;
    next: number;
    numFound: number;
    constructor() {
        this.perPage = 10;
        this.next = 1;
        this.numFound = 0;
    }
}