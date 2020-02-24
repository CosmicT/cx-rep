import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ContactModel } from 'src/app/modules/lead/models/contact.model';
import { LeadService } from 'src/app/modules/lead/services/lead.service';
import { AccountService } from 'src/app/modules/account/services/account.service';
import { DataSearchModel } from 'src/app/models/data-search.model';
import { PaginationModel } from 'src/app/models/pagination.model';
import { CompetitionModel } from 'src/app/modules/account/models/competition.model';

@Injectable()
export class ContactViewResolver implements Resolve<[Array<ContactModel>, CompetitionModel]> {
    leadSearch: DataSearchModel;
    defaultPagination: PaginationModel;
    constructor(
        private _LeadService: LeadService,
        private _AccountService: AccountService
    ) {
        this.leadSearch = new DataSearchModel();
        this.leadSearch.orderby = 'id';
        this.defaultPagination = new PaginationModel();
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<[Array<ContactModel>, CompetitionModel]> {
        const contactId = route.queryParams.contactId;
        const accountId = route.queryParams.accountId;
        this.leadSearch.filter.push({
            column: 'id',
            key: 'equal',
            value: contactId
        });
        return Promise.all([
            this._LeadService.searchLead(this.leadSearch).then(data => data.data),
            this._AccountService.getCompetition(this.defaultPagination.perPage, this.defaultPagination.next, '', accountId).then(data => data.data)
        ]);
    }
}