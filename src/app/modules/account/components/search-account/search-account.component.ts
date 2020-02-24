import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import CustomStore from 'devextreme/data/custom_store';
import { DataSearchModel } from 'src/app/models/data-search.model';
@Component({
    selector: 'app-search-account',
    templateUrl: './search-account.component.html'
})
export class SearchAccountComponent implements OnInit {
    dataSourceGrid: any;
    accountSearch: DataSearchModel;
    isIdCloumnVisible: boolean;
    constructor(
        private _AccountService: AccountService
    ) {
        this.accountSearch = new DataSearchModel();
        this.accountSearch.orderby = 'id';
        this.accountSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.isIdCloumnVisible = true;
    }
    ngOnInit() {
        this.init();
    }
    init() {
        this.dataSourceGrid = new CustomStore({
            key: 'id',
            load: async (options) => {
                console.log(options);
                this.accountSearch.perpage = options.take;
                this.accountSearch.skip = options.skip === 0 ? 1 : (options.skip === options.take ? (options.skip / options.take) + 1 : Math.round((options.skip / options.take)) + 1);
                if (options.filter) {
                    this.accountSearch.filter[1] = {
                        column: options.filter[0],
                        key: options.filter[1],
                        value: options.filter[2]
                    };
                } else {
                    this.accountSearch.filter = [];
                    this.accountSearch.filter.push({
                        column: 'deleted',
                        key: 'equal',
                        value: '0'
                    });
                }
                return await this._AccountService.accountView(this.accountSearch)
                    .then(value => {
                        console.log(value);
                        if (value.success === true) {
                            return {
                                data: value.data,
                                totalCount: value.numFound
                            };
                        }
                    });
            }
        });
    }
}