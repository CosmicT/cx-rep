import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import CustomStore from 'devextreme/data/custom_store';
import { DataSearchModel } from 'src/app/models/data-search.model';

@Component({
    selector: 'app-search-contact',
    templateUrl: './search-contact.component.html'
})
export class SearchContactComponent implements OnInit {
    contactSearch: DataSearchModel;
    dataSourceGrid: any;
    constructor(
        private _ContactService: ContactService
    ) {
        this.contactSearch = new DataSearchModel();
        this.contactSearch.orderby = 'id';
        this.contactSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
    }
    ngOnInit() {
        this.init();
    }
    init() {
        this.dataSourceGrid = new CustomStore({
            key: 'id',
            load: async (options) => {
                this.contactSearch.perpage = options.take;
                this.contactSearch.skip = options.skip === 0 ? 1 : (options.skip === options.take ? (options.skip / options.take) + 1 : Math.round((options.skip / options.take)) + 1);
                if (options.filter) {
                    this.contactSearch.filter[1] = {
                        column: options.filter[0],
                        key: options.filter[1],
                        value: options.filter[2]
                    };
                } else {
                    this.contactSearch.filter = [];
                    this.contactSearch.filter.push({
                        column: 'deleted',
                        key: 'equal',
                        value: '0'
                    });
                }
                return await this._ContactService.contactView(this.contactSearch)
                    .then(value => {
                        console.log(value);
                        return {
                            data: value.data,
                            totalCount: value.numFound
                        };
                    });
            }
        });
    }
}