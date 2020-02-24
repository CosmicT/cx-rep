import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { PaginationModel } from 'src/app/models/pagination.model';
import { DataSearchModel } from 'src/app/models/data-search.model';

@Injectable()
export class AccountViewResolver implements Resolve<any> {
    defaultPagination: PaginationModel;
    accountSearch: DataSearchModel;
    constructor(private _AccountService: AccountService) {
        this.defaultPagination = new PaginationModel();
        this.accountSearch = new DataSearchModel();
        this.accountSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.accountSearch.orderby = 'id';
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
        const id = route.params.id;
        this.accountSearch.filter.push({
            column: 'id',
            key: 'equal',
            value: id
        });
        return this._AccountService.searchAccount(this.accountSearch)
            .then(data => data.data);
    }
}