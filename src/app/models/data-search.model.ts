export class DataSearchModel {
    perpage: number;
    skip: number;
    orderby: string;
    filter: Array<Filter>;
    constructor() {
        this.perpage = 10;
        this.skip = 1;
        this.orderby = '';
        this.filter = Array<Filter>();
    }
}
export class Filter {
    column: string;
    key: string;
    value: string;
    constructor() {
        this.column = '';
        this.key = '';
        this.value = '';
    }
}
export class DataSearchModelWithInclude {
    perpage: number;
    skip: number;
    orderby: string;
    filter: Array<Filter>;
    include: string;
    constructor() {
        this.perpage = 10;
        this.skip = 1;
        this.orderby = '';
        this.filter = Array<Filter>();
        this.include = '';
    }
}