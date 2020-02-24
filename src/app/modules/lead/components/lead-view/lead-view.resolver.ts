import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LeadService } from '../../services/lead.service';
import { ContactModelWithResponse } from '../../models/contact.model';
import { PaginationModel } from 'src/app/models/pagination.model';
import { DataSearchModel } from 'src/app/models/data-search.model';

@Injectable()
export class LeadViewResolver implements Resolve<ContactModelWithResponse> {
    defaultPagination: PaginationModel;
    leadSearch: DataSearchModel;
    constructor(
        private _LeadService: LeadService
    ) {
        this.defaultPagination = new PaginationModel();
        this.leadSearch = new DataSearchModel;
        this.leadSearch.perpage = this.defaultPagination.perPage;
        this.leadSearch.skip = this.defaultPagination.next;
        this.leadSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.leadSearch.orderby = 'id';
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<ContactModelWithResponse> {
        const id = route.params.id;
        this.leadSearch.filter.push({
            column: 'id',
            key: 'equal',
            value: id
        });
        return this._LeadService.searchLead(this.leadSearch)
            .then(data => data);
    }
}