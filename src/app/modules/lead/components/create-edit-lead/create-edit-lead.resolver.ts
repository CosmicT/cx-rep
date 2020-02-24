import { DataSearchModel } from './../../../../models/data-search.model';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DepartmentWithResponse } from 'src/app/models/master-data/department.model';
import { PaginationModel } from 'src/app/models/pagination.model';
import { MasterDataService } from 'src/app/services/master-data/master-data.service';
import { CountryWithResponse } from 'src/app/models/master-data/country.model';
import { ContactModelWithResponse } from '../../models/contact.model';
import { LeadService } from '../../services/lead.service';
import { Injectable } from '@angular/core';
@Injectable()
export class CreateEditLeadResolver implements Resolve<[ContactModelWithResponse, DepartmentWithResponse, CountryWithResponse]> {
    defaultPagination: PaginationModel;
    commonFilter: DataSearchModel;

    constructor(
        private _MasterDataService: MasterDataService,
        private _LeadService: LeadService
    ) {
        this.defaultPagination = new PaginationModel();
        this.commonFilter = new DataSearchModel();
        this.commonFilter.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<[ContactModelWithResponse, DepartmentWithResponse, CountryWithResponse]> {
        const id = route.params.id;
        this.commonFilter.perpage = this.defaultPagination.perPage;
        this.commonFilter.skip = this.defaultPagination.next;
        this.commonFilter.orderby = 'id';
        return Promise.all([
            (() => {
                const leadFilter = this.commonFilter;
                leadFilter.filter.push({
                    column: 'id',
                    key: 'equal',
                    value: id
                });
                if (id !== 'add') {
                    return this._LeadService.searchLead(leadFilter)
                        .then(data => data);
                }
            })(),
            this._MasterDataService.getDepartment(this.commonFilter)
                .then(data => data),
            this._MasterDataService.getCountry(this.defaultPagination.perPage, this.defaultPagination.next, '').
                then(data => data)
        ]);
    }
}