import { Component, OnInit } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { LeadService } from '../../services/lead.service';
import { DataSearchModel } from 'src/app/models/data-search.model';
@Component({
    selector: 'app-search-lead',
    templateUrl: './search-lead.component.html'
})
export class SearchLeadComponent implements OnInit {
    dataSourceGrid: any;
    leadSearch: DataSearchModel;
    constructor(
        private _LeadService: LeadService
    ) {
        this.leadSearch = new DataSearchModel();
        this.leadSearch.orderby = 'id';
    }
    ngOnInit() {
        this.init();
    }

    init() {
        this.dataSourceGrid = new CustomStore({
            key: 'id',
            load: async (options) => {
                this.leadSearch.perpage = options.take;
                this.leadSearch.skip = options.skip === 0 ? 1 : (options.skip === options.take ? (options.skip / options.take) + 1 : Math.round((options.skip / options.take)) + 1);
                if (options.filter) {
                    this.leadSearch.filter[1] = {
                        column: options.filter[0],
                        key: options.filter[1],
                        value: options.filter[2]
                    };
                } else {
                    this.leadSearch.filter = [];
                    this.leadSearch.filter.push({
                        column: 'deleted',
                        key: 'equal',
                        value: '0'
                    });
                }
                return await this._LeadService.leadView(this.leadSearch)
                    .then(value => {
                        value.data = value.data.map(lead => {
                            return {
                                ...lead, ...{
                                    mobileNumber: `+91${lead.mobilecountrycode}-${lead.mobilenumber}`
                                }
                            };
                        });
                        return {
                            data: value.data,
                            totalCount: value.numFound
                        };
                    });
            }
        });
    }

    editorPreparing(event: string) {

    }
    rowValidating(event: string) {

    }
    selectionChanged(event: string) {

    }
}