import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MasterDataService } from 'src/app/services/master-data/master-data.service';
import { AccountService } from '../../services/account.service';
import { DataSearchModel } from 'src/app/models/data-search.model';
import { LeadService } from 'src/app/modules/lead/services/lead.service';
import { PaginationModel } from 'src/app/models/pagination.model';
import { CurrencyModelWithResponse } from 'src/app/models/master-data/currency.model';
import { IndustryWithResponse, IndustryGroupWithResponse } from 'src/app/models/master-data/industry.model';
import { ClassificationWithResponse } from 'src/app/models/master-data/classification.model';
import { ProductWithResponse, ProcessWithResponse } from 'src/app/models/master-data/portal-process-product.model';
import { GhCompetetorWithResponse } from 'src/app/models/master-data/gh-competetor.model';
import { ToolAndTechnologyWithResponse } from 'src/app/models/master-data/tool-and-technology.model';
import { ApplicationTrackingWithResponse } from 'src/app/models/master-data/application-tracking.model';
import { NoticeByOutWithResponse } from 'src/app/models/master-data/noticebyout.model';

@Injectable()
export class EditAccountResolver implements Resolve<[
    CurrencyModelWithResponse, IndustryWithResponse,
    IndustryGroupWithResponse, ClassificationWithResponse,
    ProductWithResponse, ProcessWithResponse,
    GhCompetetorWithResponse, ToolAndTechnologyWithResponse,
    ApplicationTrackingWithResponse, NoticeByOutWithResponse
]> {
    dataSearch: DataSearchModel;
    defaultPagination: PaginationModel;
    constructor(
        private _MasterDataService: MasterDataService,
        private _AccountService: AccountService,
        private _LeadService: LeadService
    ) {
        this.dataSearch = new DataSearchModel();
        this.dataSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.defaultPagination = new PaginationModel();
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<[
        CurrencyModelWithResponse, IndustryWithResponse,
        IndustryGroupWithResponse, ClassificationWithResponse,
        ProductWithResponse, ProcessWithResponse,
        GhCompetetorWithResponse, ToolAndTechnologyWithResponse,
        ApplicationTrackingWithResponse, NoticeByOutWithResponse
    ]> {
        return Promise.all([
            this._MasterDataService.getCurrency({ ...this.dataSearch, ...{ orderby: 'id' } }).then(data => data),
            this._MasterDataService.getIndustry({ ...this.dataSearch, ...{ orderby: 'id' } }).then(data => data),
            this._MasterDataService.getIndustryGroup({ ...this.dataSearch, ...{ orderby: 'id' } }).then(data => data),
            this._MasterDataService.getClassification({ ...this.dataSearch, ...{ orderby: 'id' } }).then(data => data),
            this._MasterDataService.getProduct({ ...this.dataSearch, ...{ orderby: 'id' } }).then(data => data),
            this._MasterDataService.getProcess({ ...this.dataSearch, ...{ orderby: 'id' } }).then(data => data),
            this._MasterDataService.getGhCompetetor({ ...this.dataSearch, ...{ orderby: 'id' } }).then(data => data),
            this._MasterDataService.getToolAndTechnology({ ...this.dataSearch, ...{ orderby: 'id' } }).then(data => data),
            this._MasterDataService.getApplicationTracking({ ...this.dataSearch, ...{ orderby: 'id' } }).then(data => data),
            this._MasterDataService.getNoticeByOut({ ...this.dataSearch, ...{ orderby: 'id' } }).then(data => data)
        ]);
    }
}