import { Component, OnInit } from '@angular/core';
import { PaginationModel } from 'src/app/models/pagination.model';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../../services/account.service';
import { DataSearchModel } from 'src/app/models/data-search.model';
import { AccountClassificationModel } from '../../../models/account-classification.model';
import { AccountIndustryGroupModel } from '../../../models/account-industry-group.model';
import { AccountSubclassificationModel } from '../../../models/account-subclassification.model';
import { AccountSuperClassificationModel } from '../../../models/account-superClassification.model';
import { AccountProductModel } from '../../../models/account-product.model';
import { AccountIndustryModel } from '../../../models/account-industry.model';
import { AccountToolAndTechModel } from '../../../models/account-tool-and-tech.model';
import { AccountServiceModel } from '../../../models/account-services.model';
import { GhCompetetorModel } from 'src/app/models/master-data/gh-competetor.model';
import { AccountProcessModel } from '../../../models/account-process.model';
import { AccountBrandModel } from '../../../models/account-brand.model';
import { AccountAliasModel } from '../../../models/account-alias.model';
import { AccountPoachModel } from '../../../models/account-poach.model';
import { AccountBlackListModel } from '../../../models/account-blacklist.model';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
    selector: 'app-account-auxiliary',
    templateUrl: './account-auxiliary.component.html'
})

export class AccountAuxiliaryComponent implements OnInit {
    divShow: boolean;
    faSearch = faSearch;
    defaultPagination: PaginationModel;
    accountId: string;
    accountPreferenceSearch: DataSearchModel;
    accountClassificationSearch: DataSearchModel;
    classification: Array<AccountClassificationModel>;
    accountIndustryGroupSearch: DataSearchModel;
    industryGroup: Array<AccountIndustryGroupModel>;
    accountSubClassificationSearch: DataSearchModel;
    subClassification: Array<AccountSubclassificationModel>;
    accountSuperClassificationSearch: DataSearchModel;
    superClassification: Array<AccountSuperClassificationModel>;
    accountProductSearch: DataSearchModel;
    product: Array<AccountProductModel>;
    accountIndustrySearch: DataSearchModel;
    industry: Array<AccountIndustryModel>;
    accountToolsAndTechnologySearch: DataSearchModel;
    toolsAndTechnology: Array<AccountToolAndTechModel>;
    accountServiceSearch: DataSearchModel;
    services: Array<AccountServiceModel>;
    accountCompetitorsSearch: DataSearchModel;
    competitor: Array<GhCompetetorModel>;
    accountProcessSearch: DataSearchModel;
    process: Array<AccountProcessModel>;
    accountBrandSearch: DataSearchModel;
    brands: Array<AccountBrandModel>;
    accountAliasSearch: DataSearchModel;
    alias: Array<AccountAliasModel>;
    accountNoPoachSearch: DataSearchModel;
    noPoach: Array<AccountPoachModel>;
    accountBlackListSearch: DataSearchModel;
    blackList: Array<AccountBlackListModel>;
    /*/ No model for preference/*/
    preference: any;
    constructor(
        private _AccountService: AccountService,
        private _ActivatedRoute: ActivatedRoute,
    ) {
        this.accountId = '';
        this.defaultPagination = new PaginationModel();
        this.industry = Array<AccountIndustryModel>();
        this.classification = Array<AccountClassificationModel>();
        this.subClassification = Array<AccountSubclassificationModel>();
        this.superClassification = Array<AccountSuperClassificationModel>();
        this.product = Array<AccountProductModel>();
        this.toolsAndTechnology = Array<AccountToolAndTechModel>();
        this.services = Array<AccountServiceModel>();
        this.industryGroup = Array<AccountIndustryGroupModel>();
        this.competitor = Array<GhCompetetorModel>();
        this.process = Array<AccountProcessModel>();
        this.brands = Array<AccountBrandModel>();
        this.alias = Array<AccountAliasModel>();
        this.noPoach = Array<AccountPoachModel>();
        this.blackList = Array<AccountBlackListModel>();


        this.accountPreferenceSearch = new DataSearchModel();
        this.accountPreferenceSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });

        this.accountIndustrySearch = new DataSearchModel();
        this.accountIndustrySearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.accountClassificationSearch = new DataSearchModel();
        this.accountClassificationSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });

        this.accountSubClassificationSearch = new DataSearchModel();
        this.accountSubClassificationSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.accountSuperClassificationSearch = new DataSearchModel();
        this.accountSuperClassificationSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.accountProductSearch = new DataSearchModel();
        this.accountProductSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.accountToolsAndTechnologySearch = new DataSearchModel();
        this.accountToolsAndTechnologySearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.accountServiceSearch = new DataSearchModel();
        this.accountServiceSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.accountIndustryGroupSearch = new DataSearchModel();
        this.accountIndustryGroupSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.accountCompetitorsSearch = new DataSearchModel();
        this.accountCompetitorsSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.accountProcessSearch = new DataSearchModel();
        this.accountProcessSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.accountBrandSearch = new DataSearchModel();
        this.accountBrandSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.accountAliasSearch = new DataSearchModel();
        this.accountAliasSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.accountNoPoachSearch = new DataSearchModel();
        this.accountNoPoachSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.accountBlackListSearch = new DataSearchModel();
        this.accountBlackListSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });

    }
    ngOnInit() {
        this.accountId = this._ActivatedRoute.snapshot.params.id;
        this.accountPreference('');
        this.accountIndustry('');
        this.accountClassification('');
        this.accountSubClassification('');
        this.accountSuperClassification('');
        this.accountProduct('');
        this.accountToolsAndTechnology('');
        this.accountService('');
        this.accountIndustryGroup('');
        this.accountCompetitors('');
        this.accountProcess('');
        this.accountBrand('');
        this.accountAlias('');
        this.accountNoPoach('');
        this.accountBlackList('');
    }
    accountPreference(event: string) {
        this.accountPreferenceSearch.perpage = this.defaultPagination.perPage;
        this.accountPreferenceSearch.skip = this.defaultPagination.next;
        this.accountPreferenceSearch.orderby = 'id';
        this.accountPreferenceSearch.filter[1] = {
            column: 'name',
            key: 'contains',
            value: event
        };
        this._AccountService.searchAccountPreference(this.accountPreferenceSearch).then(data => {
            this.preference = data.data;
        });
    }
    accountIndustry(event: string) {
        this.accountIndustrySearch.perpage = this.defaultPagination.perPage;
        this.accountIndustrySearch.skip = this.defaultPagination.next;
        this.accountIndustrySearch.orderby = 'id';
        this.accountIndustrySearch.filter[1] = {
            column: 'industryname',
            key: 'contains',
            value: event
        };
        this._AccountService.searchAccountIndustry(this.accountIndustrySearch).then(data => {
            this.industry = data.data;
        });
    }
    accountClassification(event: string) {
        this.accountClassificationSearch.perpage = this.defaultPagination.perPage;
        this.accountClassificationSearch.skip = this.defaultPagination.next;
        this.accountClassificationSearch.orderby = 'id';
        this.accountClassificationSearch.filter[1] = {
            column: 'classificationname',
            key: 'contains',
            value: event
        };
        this._AccountService.searchAccountClassification(this.accountClassificationSearch).then(data => {
            this.classification = data.data;
        });
    }
    accountSubClassification(event: string) {
        this.accountSubClassificationSearch.perpage = this.defaultPagination.perPage;
        this.accountSubClassificationSearch.skip = this.defaultPagination.next;
        this.accountSubClassificationSearch.orderby = 'id';
        this.accountSubClassificationSearch.filter[1] = {
            column: 'subclassificationname',
            key: 'contains',
            value: event
        };
        this._AccountService.searchAccountSubClassification(this.accountSubClassificationSearch).then(data => {
            this.subClassification = data.data;
        });
    }
    accountSuperClassification(event: string) {
        this.accountSuperClassificationSearch.perpage = this.defaultPagination.perPage;
        this.accountSuperClassificationSearch.skip = this.defaultPagination.next;
        this.accountSuperClassificationSearch.orderby = 'id';
        this.accountSuperClassificationSearch.filter[1] = {
            column: 'superclassificationname',
            key: 'contains',
            value: event
        };
        this._AccountService.searchSuperClassification(this.accountSuperClassificationSearch).then(data => {
            this.superClassification = data.data;
        });
    }
    accountProduct(event: string) {
        this.accountProductSearch.perpage = this.defaultPagination.perPage;
        this.accountProductSearch.skip = this.defaultPagination.next;
        this.accountProductSearch.orderby = 'id';
        this.accountProductSearch.filter[1] = {
            column: 'productname',
            key: 'contains',
            value: event
        };
        this._AccountService.searchAccountProduct(this.accountProductSearch).then(data => {
            this.product = data.data;
        });
    }
    accountToolsAndTechnology(event: string) {
        this.accountToolsAndTechnologySearch.perpage = this.defaultPagination.perPage;
        this.accountToolsAndTechnologySearch.skip = this.defaultPagination.next;
        this.accountToolsAndTechnologySearch.orderby = 'id';
        this.accountToolsAndTechnologySearch.filter[1] = {
            column: 'tooltechname',
            key: 'contains',
            value: event
        };
        this._AccountService.searchToolAndTech(this.accountToolsAndTechnologySearch).then(data => {
            this.toolsAndTechnology = data.data;
        });
    }
    accountService(event: string) {
        this.accountServiceSearch.perpage = this.defaultPagination.perPage;
        this.accountServiceSearch.skip = this.defaultPagination.next;
        this.accountServiceSearch.orderby = 'id';
        this.accountServiceSearch.filter[1] = {
            column: 'servicename',
            key: 'contains',
            value: event
        };
        this._AccountService.searchAccountService(this.accountServiceSearch).then(data => {
            this.services = data.data;
        });
    }
    accountIndustryGroup(event: string) {
        this.accountIndustryGroupSearch.perpage = this.defaultPagination.perPage;
        this.accountIndustryGroupSearch.skip = this.defaultPagination.next;
        this.accountIndustryGroupSearch.orderby = 'id';
        this.accountIndustryGroupSearch.filter[1] = {
            column: 'industrygroupname',
            key: 'contains',
            value: event
        };
        this._AccountService.searchAccountIndustryGroup(this.accountIndustryGroupSearch).then(data => {
            this.industryGroup = data.data;
        });
    }
    accountCompetitors(event: string) {
        this.accountCompetitorsSearch.perpage = this.defaultPagination.perPage;
        this.accountCompetitorsSearch.skip = this.defaultPagination.next;
        this.accountCompetitorsSearch.orderby = 'id';
        this.accountCompetitorsSearch.filter[1] = {
            column: 'agencyname',
            key: 'contians',
            value: event
        };
        this._AccountService.searchAccountGhCompetitor(this.accountCompetitorsSearch).then(data => {
            this.competitor = data.data;
        });
    }
    accountProcess(event: string) {
        this.accountProcessSearch.perpage = this.defaultPagination.perPage;
        this.accountProcessSearch.skip = this.defaultPagination.next;
        this.accountProcessSearch.orderby = 'id';
        this.accountProcessSearch.filter[1] = {
            column: 'processname',
            key: 'contains',
            value: event
        };
        this._AccountService.searchAccountProcess(this.accountProcessSearch).then(data => {
            this.process = data.data;
        });
    }
    accountBrand(event: string) {
        this.accountBrandSearch.perpage = this.defaultPagination.perPage;
        this.accountBrandSearch.skip = this.defaultPagination.next;
        this.accountBrandSearch.orderby = 'id';
        this.accountBrandSearch.filter[1] = {
            column: 'brandname',
            key: 'contains',
            value: event
        };
        this._AccountService.searchAccountBrand(this.accountBrandSearch).then(data => {
            this.brands = data.data;
        });
    }
    accountAlias(event: string) {
        this.accountAliasSearch.perpage = this.defaultPagination.perPage;
        this.accountAliasSearch.skip = this.defaultPagination.next;
        this.accountAliasSearch.orderby = 'id';
        this.accountAliasSearch.filter[1] = {
            column: 'aliseaccountname',
            key: 'contains',
            value: event
        };
        this._AccountService.searchAccountAlias(this.accountAliasSearch).then(data => {
            this.alias = data.data;
        });
    }
    accountNoPoach(event: string) {
        this.accountNoPoachSearch.perpage = this.defaultPagination.perPage;
        this.accountNoPoachSearch.skip = this.defaultPagination.next;
        this.accountNoPoachSearch.orderby = 'id';
        this.accountNoPoachSearch.filter[1] = {
            column: 'name',
            key: 'contains',
            value: event
        };
        this._AccountService.searchAccountPoach(this.accountNoPoachSearch).then(data => {
            this.noPoach = data.data;
        });
    }
    accountBlackList(event: string) {
        this.accountBlackListSearch.perpage = this.defaultPagination.perPage;
        this.accountBlackListSearch.skip = this.defaultPagination.next;
        this.accountBlackListSearch.orderby = 'id';
        this.accountBlackListSearch.filter[1] = {
            column: 'name',
            key: 'contains',
            value: event
        };
        this._AccountService.searchAccountBlackList(this.accountBlackListSearch).then(data => {
            this.blackList = data.data;
        });
    }
}