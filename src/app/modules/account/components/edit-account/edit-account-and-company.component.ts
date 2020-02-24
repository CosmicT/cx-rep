import { AccountModel } from '../../models/account.model';
import { DataSearchModel, Filter } from './../../../../models/data-search.model';
import { CompetitionModel } from './../../models/competition.model';
import { AccountService } from './../../services/account.service';
import { Component, OnInit } from '@angular/core';
import { faTimesCircle, faGlobe, faPhoneAlt, faMapMarkerAlt, faArrowRight, faBuilding, faEdit, faSpinner, faTrashAlt, faPlusCircle, faMinusCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { IndustryModel, IndustryGroupModel } from './../../../../models/master-data/industry.model';
import { MasterDataService } from '../../../../services/master-data/master-data.service';
import { PaginationModel } from '../../../../models/pagination.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductModel, ProcessModel } from '../../../../models/master-data/portal-process-product.model';
import { ToolAndTechnologyModel } from '../../../../models/master-data/tool-and-technology.model';
import { CountryModel } from '../../../../models/master-data/country.model';
import { CurrencyModel } from '../../../../models/master-data/currency.model';
import { GhCompetetorModel } from '../../../../models/master-data/gh-competetor.model';
import * as moment from 'moment';
import { ClassificationModel, SubClassificationModel, SuperClassficationModel } from '../../../../models/master-data/classification.model';
import { ApplicationTrackingModel } from '../../../../models/master-data/application-tracking.model';
import { NoticeByOutModel } from '../../../../models/master-data/noticebyout.model';
import { ServiceModel } from '../../../../models/master-data/service.model';
import { LeadService } from '../../../lead/services/lead.service';
import { SearchUserModel } from '../../../lead/models/search-user.model';
import CustomStore from 'devextreme/data/custom_store';
import { ActivatedRoute } from '@angular/router';
import { NotifierService } from '../../../../services/notifier.service';
import { ProposedServiceModel } from '../../../../models/master-data/proposed-services.model';
@Component({
    selector: 'app-edit-account-and-company',
    templateUrl: './edit-account-and-company.component.html'
})
export class EditAccountAndCompanyComponent implements OnInit {
    faMinusCircle = faMinusCircle;
    faPlusCircle = faPlusCircle;
    faEdit = faEdit;
    faTrashAlt = faTrashAlt;
    faTimesCircle = faTimesCircle;
    faBuilding = faBuilding;
    faGlobe = faGlobe;
    faPhoneAlt = faPhoneAlt;
    faMapMarkerAlt = faMapMarkerAlt;
    faInfoCircle = faInfoCircle;
    divShow: boolean;
    gridDataSource: any;
    gridBoxValue: number[] = [3];
    gridBoxValue1: any;
    competitionGridBoxValue: any;
    noPoachGridBoxValue: any;
    blackListgridBoxValue: any;
    brandDataSourceValue: any;
    defaultPagination: PaginationModel;
    industries: Array<IndustryModel>;
    industryGroups: Array<IndustryGroupModel>;
    products: Array<ProductModel>;
    toolsAndtech: Array<ToolAndTechnologyModel>;
    process: Array<ProcessModel>;
    countryCode: Array<CountryModel>;
    classification: Array<ClassificationModel>;
    subClassification: Array<SubClassificationModel>;
    superClassification: Array<SuperClassficationModel>;
    ghCompetitor: Array<GhCompetetorModel>;
    noitceBuyOut: Array<NoticeByOutModel>;
    currency: Array<CurrencyModel>;
    country: Array<CountryModel>;
    services: Array<ServiceModel>;
    proposedServices: Array<ProposedServiceModel>;
    applicationTraking: Array<ApplicationTrackingModel>;
    competitionById: Array<CompetitionModel>;
    editCompanyAndAccountForm: FormGroup;
    editCompanyAndAccountQuaForm: FormGroup;
    editAccountFormSubmitted: boolean;
    editAccountFormQualificationSubmitted: boolean;
    users: Array<SearchUserModel>;
    anchorDataSource: any;
    preference: Array<AccountModel>;
    apptrakFilter: DataSearchModel;
    notifyFilter: DataSearchModel;
    industryFilters: DataSearchModel;
    classificationFilter: DataSearchModel;
    subClassifiactionFilter: DataSearchModel;
    getGhCompetetorFilters: DataSearchModel;
    processFilters: DataSearchModel;
    brandFilter: DataSearchModel;
    productFilters: DataSearchModel;
    industryGroupFilter: DataSearchModel;
    currencyFilter: DataSearchModel;
    toolsAndTechFilter: DataSearchModel;
    ServiceFilter: DataSearchModel;
    accountQualificationHistory: DataSearchModel;
    accNoPoachFilter: DataSearchModel;
    accountFilter: DataSearchModel;
    accountQualificationFilter: DataSearchModel;
    proposedServiceFilter: DataSearchModel;
    noPoachDataSource: any;
    blackListDataSource: any;
    brandDataSource: any;
    editAccountId: '';
    name: string;
    userData: any;
    selectedId: any;
    selected: any;
    parentCompanyDataSource: CustomStore;
    selectedAnchor: any;
    selectedParentCompany: any;
    selectedCompetition: any;
    selectedNoPoach: any;
    selectedBlackList: any;
    selectedBrand: any;
    accountSubmitting: boolean;
    faSpinner = faSpinner;
    faArrowRight = faArrowRight;
    accountviewmodel: AccountModel;
    isExistUser: boolean;
    filters: Filter;
    constructor(
        private _MasterDataService: MasterDataService,
        private _FormBuilder: FormBuilder,
        private _LeadService: LeadService,
        private _ActivatedRoute: ActivatedRoute,
        private _AccountService: AccountService,
        private _NotifierService: NotifierService,
    ) {
        this.isExistUser = false;
        this.divShow = true;
        this.defaultPagination = new PaginationModel();
        this.industries = Array<IndustryModel>();
        this.noitceBuyOut = Array<NoticeByOutModel>();
        this.industryGroups = Array<IndustryGroupModel>();
        this.products = Array<ProductModel>();
        this.toolsAndtech = Array<ToolAndTechnologyModel>();
        this.process = Array<ProcessModel>();
        this.countryCode = Array<CountryModel>();
        this.classification = Array<ClassificationModel>();
        this.subClassification = Array<SubClassificationModel>();
        this.superClassification = Array<SuperClassficationModel>();
        this.applicationTraking = Array<ApplicationTrackingModel>();
        this.services = Array<ServiceModel>();
        this.proposedServices = Array<ProposedServiceModel>();
        this.users = Array<SearchUserModel>();
        this.competitionById = Array<CompetitionModel>();
        this.editAccountFormSubmitted = false;
        this.editAccountFormQualificationSubmitted = false;
        this.accountSubmitting = false;
        this.editCompanyAndAccountForm = this._FormBuilder.group({
            anchor: [null],
            account: [null],
            parentaccountname: [null],
            noPoach: [null],
            globalhuntclient: [''],
            boardnumbercountrycode: [null, [Validators.required]],
            boardnumber: [null, [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
            status: [''],
            industry: [null, [Validators.required]],
            industryClassification: [null, [Validators.required]],
            industrySubClassification: [null],
            industrySuperClassification: [null],
            industryGroup: [null, [Validators.required]],
            organizationtype: [''],
            product: [null],
            services: [''],
            competition: [''],
            blackList: [''],
            proposedservice: [null, Validators.required],
            brand: [''],
            revenuefromdate: [''],
            revenuetodate: [''],
            toolsAndtechnology: [null],
            internalrecruitmentteam: [''],
            websiteurl: [''],
            process: [null],
            accounttype: [''],
            accountcategory: [''],
            shortname: [''],
            competitors: [null, [Validators.required]],
            pancardno: ['', [Validators.required, Validators.pattern(/^(([A-Z]){5}([0-9]){4}([A-Z]){1}){0,10}?$/), Validators.maxLength(10)]],
            preferences: [null],
            empanelmentfromdate: [''],
            empanelmenttodate: [''],
            revenue: [''],
            revenuecurrency: [null],
            totalcontactrevenue: [''],
            description: ['', [Validators.maxLength(500)]]
        });
        this.editCompanyAndAccountQuaForm = this._FormBuilder.group({
            globalturnover: [''],
            usingportal: [''],
            stockexchangelisting: [''],
            segments: [''],
            modeofbussiness: [''],
            productcompany: [''],
            liveposition: [''],
            recruitmentteamsize: [],
            senioopeningclosed: [''],
            globallyemployeeno: [],
            employeeinindia: [],
            foundedyear: [''],
            globalofficess: [''],
            totalmendateclosed: [],
            inhouseattirationrate: [''],
            numberofvendor: [''],
            culteroforganization: [''],
            infrastructureoforganization: [''],
            applicationtrackingsystem: [null],
            noticebyout: [null],
            typeofcompany: [''],
            memberof: [],
            vendorcode: [],
            siccode: [],
            status: [''],
        });
        this.apptrakFilter = new DataSearchModel();
        this.apptrakFilter.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.notifyFilter = new DataSearchModel();
        this.notifyFilter.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.classificationFilter = new DataSearchModel();
        this.classificationFilter.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.subClassifiactionFilter = new DataSearchModel();
        this.subClassifiactionFilter.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.industryFilters = new DataSearchModel();
        this.industryFilters.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.getGhCompetetorFilters = new DataSearchModel();
        this.getGhCompetetorFilters.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.processFilters = new DataSearchModel();
        this.processFilters.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.productFilters = new DataSearchModel();
        this.productFilters.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.industryGroupFilter = new DataSearchModel();
        this.industryGroupFilter.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.currencyFilter = new DataSearchModel();
        this.currencyFilter.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.toolsAndTechFilter = new DataSearchModel();
        this.toolsAndTechFilter.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.ServiceFilter = new DataSearchModel();
        this.ServiceFilter.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.accountQualificationHistory = new DataSearchModel();
        this.accountQualificationHistory.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.accNoPoachFilter = new DataSearchModel();
        this.accNoPoachFilter.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.accountFilter = new DataSearchModel();
        this.accountFilter.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.accountQualificationFilter = new DataSearchModel();
        this.accountQualificationFilter.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.brandFilter = new DataSearchModel();
        this.brandFilter.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.proposedServiceFilter = new DataSearchModel();
        this.proposedServiceFilter.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
    }
    ngOnInit() {
        this._ActivatedRoute.data.subscribe(data => {
            console.log(data);
        });
        this.currencySearch('');
        this.searchIndustry('');
        this.searchIndustryGroup('');
        this.serachClassification('');
        this.searchProduct('');
        this.searchProcess('');
        this.searchGhCompetetor('');
        this.searchToolAndTechnology('');
        this.serchApptraking('');
        this.searchNoticeBuyNotice('');
        this.searchCountry('');
        this.searchServices('');
        this.searchCompany('');
        this.searchAnchor('');
        this.accountBlackList('');
        this.accountNoPoach('');
        this.accountBrand('');
        this.searchParentCompany('');
        this.searchProposedServices('');
        this.editAccountId = this._ActivatedRoute.snapshot.params.id;
        this.accountFilter.perpage = this.defaultPagination.perPage;
        this.accountFilter.skip = this.defaultPagination.next;
        this.accountFilter.orderby = 'id';
        this.accountFilter.filter[1] = {
            column: 'id',
            key: 'equal',
            value: this.editAccountId
        };
        this._AccountService.searchAccount(this.accountFilter).then(data => {
            if (data != null && data !== undefined) {
                this.editCompanyAndAccountForm.patchValue(data.data[0]);
                this.editCompanyAndAccountForm.controls.account.patchValue(data.data[0].name);
            }
        });
        this.accountQualificationFilter.perpage = this.defaultPagination.perPage;
        this.accountQualificationFilter.skip = this.defaultPagination.next;
        this.accountQualificationFilter.orderby = 'accountid';
        this.accountQualificationFilter.filter[1] = {
            column: 'accountid',
            key: 'equal',
            value: this.editAccountId
        };
        this._AccountService.getAccountQualificationHistory(this.accountQualificationFilter).then(data => {
            if (data.data[0] != null && data.data[0] !== undefined) {
                this.editCompanyAndAccountQuaForm.patchValue(data.data[0]);
            }
        });
        this.editCompanyAndAccountForm.controls.industryClassification.valueChanges.subscribe(data => {
            // debugger;
            if (data && data.length) {
                data.forEach(element => {
                    this.searchSubClassifiaction(element.id, '');
                });
            } else {
                this.editCompanyAndAccountForm.controls.industrySubClassification.reset();
                this.editCompanyAndAccountForm.controls.industrySuperClassification.reset();
                this.subClassification = [];
            }
        });
        this.editCompanyAndAccountForm.controls.industrySubClassification.valueChanges.subscribe(data => {
            if (data && data.length) {
                data.forEach(element => {
                    this.searchSupClassifiaction(element.id, '');
                });
            } else {
                this.superClassification = [];
                this.editCompanyAndAccountForm.controls.industrySuperClassification.reset();
            }
        });
        this.editCompanyAndAccountForm.controls.revenuecurrency.valueChanges.subscribe(data => {
            if (data) {
                this.editCompanyAndAccountForm.patchValue({
                    totalcontactrevenue: ((this.editCompanyAndAccountForm.controls.revenue.value) * data.rate)
                });
            } else {
                this.editCompanyAndAccountForm.controls.totalcontactrevenue.reset();
            }
        });
    }
    serchApptraking(event: string) {
        this.apptrakFilter.perpage = this.defaultPagination.perPage;
        this.apptrakFilter.skip = this.defaultPagination.next;
        this.apptrakFilter.orderby = 'id';
        this.apptrakFilter.filter[1] = {
            column: 'name',
            key: 'contains',
            value: event
        };
        this._MasterDataService.getApplicationTracking(this.apptrakFilter).then(data => {
            this.applicationTraking = data.data;
        });
    }
    searchNoticeBuyNotice(event: string) {
        this.notifyFilter.perpage = this.defaultPagination.perPage;
        this.notifyFilter.skip = this.defaultPagination.next;
        this.notifyFilter.orderby = 'id';
        this.notifyFilter.filter[1] = {
            column: 'noticetext',
            key: 'contains',
            value: event
        };
        this._MasterDataService.getNoticeByOut(this.notifyFilter).then(data => {
            this.noitceBuyOut = data.data;
        });
    }
    serachClassification(event: string) {
        this.classificationFilter.perpage = this.defaultPagination.perPage;
        this.classificationFilter.skip = this.defaultPagination.next;
        this.classificationFilter.orderby = 'id';
        this.classificationFilter.filter[1] = {
            column: 'name',
            key: 'contains',
            value: event
        };
        this._MasterDataService.getClassification(this.classificationFilter).then(classification => {
            this.classification = classification.data;
        });
    }
    searchSubClassifiaction(data: number, event: string) {
        if (this.editCompanyAndAccountForm.controls.industryClassification.value[0] != null) {
            this._MasterDataService.getSubClassification(data || this.editCompanyAndAccountForm.controls.industryClassification.value[0].id, event, this.defaultPagination.perPage, this.defaultPagination.next).then(subslassification => {
                this.subClassification = subslassification.data;
            });
        }
    }
    searchSupClassifiaction(data: number, event: string) {
        if (this.editCompanyAndAccountForm.controls.industrySubClassification.value[0] != null) {
            this._MasterDataService.getSupClassification(data || this.editCompanyAndAccountForm.controls.industrySubClassification.value[0].id, event, this.defaultPagination.perPage, this.defaultPagination.next).then(supclassification => {
                this.superClassification = supclassification.data;
            });
        }
    }
    searchIndustry(event: string) {
        this.industryFilters.perpage = this.defaultPagination.perPage;
        this.industryFilters.skip = this.defaultPagination.next;
        this.industryFilters.orderby = 'id';
        this.industryFilters.filter[1] = {
            column: 'industry',
            key: 'contains',
            value: event
        };
        this._MasterDataService.getIndustry(this.industryFilters).then(industry => {
            this.industries = industry.data;
        });
    }
    searchGhCompetetor(event: string) {
        this.getGhCompetetorFilters.perpage = this.defaultPagination.perPage;
        this.getGhCompetetorFilters.skip = this.defaultPagination.next;
        this.getGhCompetetorFilters.orderby = 'agencyname';
        this.getGhCompetetorFilters.filter[0] = {
            column: 'agencyname',
            key: 'contains',
            value: event
        };
        this._MasterDataService.getGhCompetetor(this.getGhCompetetorFilters).then(competitor => {
            this.ghCompetitor = competitor.data;
        });
    }
    searchProcess(event: string) {
        this.processFilters.perpage = this.defaultPagination.perPage;
        this.processFilters.skip = this.defaultPagination.next;
        this.processFilters.orderby = 'id';
        this.processFilters.filter[1] = {
            column: 'name',
            key: 'contains',
            value: event
        };
        this._MasterDataService.getProcess(this.processFilters).then(proccess => {
            this.process = proccess.data;
        });
    }
    searchProduct(event: string) {
        this.productFilters.perpage = this.defaultPagination.perPage;
        this.productFilters.skip = this.defaultPagination.next;
        this.productFilters.orderby = 'id';

        this.productFilters.filter[1] = {
            column: 'product_name',
            key: 'contains',
            value: event
        };

        this._MasterDataService.getProduct(this.productFilters).then(product => {
            this.products = product.data;
        });
    }
    searchIndustryGroup(event: string) {
        this.industryGroupFilter.perpage = this.defaultPagination.perPage;
        this.industryGroupFilter.skip = this.defaultPagination.next;
        this.industryGroupFilter.orderby = 'id';
        this._MasterDataService.getIndustryGroup(this.industryGroupFilter).then(indGroup => {
            this.industryGroups = indGroup.data;
        });
    }
    currencySearch(event: string) {
        this.currencyFilter.perpage = this.defaultPagination.perPage;
        this.currencyFilter.skip = this.defaultPagination.next;
        this.currencyFilter.orderby = 'id';
        this.currencyFilter.filter[1] = {
            column: 'currency',
            key: 'contains',
            value: event
        };
        this._MasterDataService.getCurrency(this.currencyFilter).then(currency => {
            this.currency = currency.data;
        });
    }
    searchToolAndTechnology(event: string) {
        this.toolsAndTechFilter.perpage = this.defaultPagination.perPage;
        this.toolsAndTechFilter.skip = this.defaultPagination.next;
        this.toolsAndTechFilter.orderby = 'id';
        this.toolsAndTechFilter.filter[1] = {
            column: 'tools_tech_name',
            key: 'contains',
            value: event
        };
        this._MasterDataService.getToolAndTechnology(this.toolsAndTechFilter).then(toolsAndTech => {
            this.toolsAndtech = toolsAndTech.data;
        });
    }
    searchCountry(event: string) {
        this._MasterDataService.getCountry(this.defaultPagination.perPage, this.defaultPagination.next, '', event).then(country => {
            this.country = country.data;
        });
    }
    searchServices(event: string) {
        this.ServiceFilter.perpage = this.defaultPagination.perPage;
        this.ServiceFilter.skip = this.defaultPagination.next;
        this.ServiceFilter.orderby = 'service_name';
        this.ServiceFilter.filter[1] = {
            column: 'service_name',
            key: 'contains',
            value: event
        };
        this._MasterDataService.getService(this.ServiceFilter).then(service => {
            this.services = service.data;
        });
    }
    searchProposedServices(event: string) {
        this.proposedServiceFilter.perpage = this.defaultPagination.perPage;
        this.proposedServiceFilter.skip = this.defaultPagination.next;
        this.proposedServiceFilter.orderby = 'service_text';
        this.proposedServiceFilter.filter[1] = {
            column: 'service_text',
            key: 'contains',
            value: event
        };
        this._MasterDataService.getProposedService(this.proposedServiceFilter).then(prposedservice => {
            this.proposedServices = prposedservice.data;
        });
    }
    accountNoPoach(event: string) {
        this.accNoPoachFilter.perpage = this.defaultPagination.perPage;
        this.accNoPoachFilter.skip = this.defaultPagination.next;
        this.accNoPoachFilter.orderby = 'id';
        this.accNoPoachFilter.filter[1] = {
            column: 'name',
            key: 'contains',
            value: event
        };
        this._AccountService.getCompetition(this.defaultPagination.perPage, this.defaultPagination.next, '', '').then(data => {
            this.noPoachDataSource = new CustomStore({
                loadMode: 'raw',
                key: 'id',
                cacheRawData: false,
                load: () => {
                    return (data as any).data;
                }
            });
        });
    }
    gridNopachNameExpr(item: any) {
        if (item) {
            return item.name;
        }
    }
    noPoachSelection(event: any) {
        if (event !== undefined && event != null && event.selectedRowsData) {
            this.selectedNoPoach = event.selectedRowsData;
        }
    }
    searchParentCompany(event: string) {
        this._AccountService.getCompetition(this.defaultPagination.perPage, this.defaultPagination.next, '', '').then(data => {
            this.parentCompanyDataSource = new CustomStore({
                loadMode: 'raw',
                key: 'id',
                cacheRawData: false,
                load: () => {
                    return (data as any).data;
                }
            });
        });
    }
    gridparentCompanyNameExpr(item: any) {
        if (item) {
            return item.name;
        }
    }
    parentCompanySelection(event: any) {
        if (event !== undefined && event != null && event.selectedRowsData[0]) {
            this.selectedParentCompany = event.selectedRowsData[0];
        }
    }
    accountBrand(event: string) {
        this.brandFilter.perpage = this.defaultPagination.perPage;
        this.brandFilter.skip = this.defaultPagination.next;
        this.brandFilter.orderby = 'id';
        this.brandFilter.filter[1] = {
            column: 'brandname',
            key: 'contains',
            value: event
        };
        this._AccountService.searchAccountBrand(this.brandFilter).then(data => {
            this.brandDataSource = new CustomStore({
                loadMode: 'raw',
                key: 'id',
                cacheRawData: false,
                load: () => {
                    return (data as any).data;
                }
            });
        });
    }
    accountBrandExpr(item: any) {
        if (item) {
            return item.brandname;
        }
    }
    brandSelectionChanges(event: any) {
        if (event !== undefined && event != null && event.selectedRowsData) {
            this.selectedBrand = event.selectedRowsData;
        }
    }
    accountBlackList(event: string) {
        this.accNoPoachFilter.perpage = this.defaultPagination.perPage;
        this.accNoPoachFilter.skip = this.defaultPagination.next;
        this.accNoPoachFilter.orderby = 'id';
        this.accNoPoachFilter.filter[1] = {
            column: 'name',
            key: 'contains',
            value: event
        };
        this._AccountService.getCompetition(this.defaultPagination.perPage, this.defaultPagination.next, '', '').then(data => {
            this.blackListDataSource = new CustomStore({
                loadMode: 'raw',
                key: 'id',
                cacheRawData: false,
                load: () => {
                    return (data as any).data;
                }
            });
        });
    }
    blackListSelection(event: any) {
        if (event !== undefined && event != null && event.selectedRowsData) {
            this.selectedBlackList = event.selectedRowsData;
        }
    }
    competitionSelection(event: any) {
        if (event !== undefined && event != null && event.selectedRowsData) {
            this.selectedCompetition = event.selectedRowsData;
        }
    }
    accountBlackListExpr(item: any) {
        if (item) {
            return item.name;
        }
    }
    searchAnchor(event: string) {
        this._LeadService.searchUserByUsername(event, this.defaultPagination.perPage, this.defaultPagination.next)
            .then(data => {
                this.anchorDataSource = new CustomStore({
                    loadMode: 'raw',
                    key: 'id',
                    cacheRawData: false,
                    load: () => {
                        return (data as any).data;
                    }
                });
            });
    }
    anchorGridNameExpr(item: any) {
        if (item) {
            return item.username;
        }
    }
    anchorSelectionChanged(event: any) {
        if (event !== undefined && event != null && event.selectedRowsData[0]) {
            this.selectedAnchor = event.selectedRowsData[0];
        }
    }
    accountInformation() {
        this.editAccountFormSubmitted = true;
    }
    searchCompany(event: string) {
        this._LeadService.searchCompany(1, event, this.defaultPagination.perPage, this.defaultPagination.next)
            .then(data => {
                this.preference = data.data as any;
            });
    }
    valueChange() {

    }
    checkUser(user: string) {
        this.accountFilter.perpage = this.defaultPagination.perPage;
        this.accountFilter.skip = this.defaultPagination.next;
        this.accountFilter.orderby = 'id';
        this.accountFilter.filter[1] = {
            column: 'id',
            key: 'equal',
            value: this.editAccountId
        };
        this.accountFilter.filter[2] = {
            column: 'name',
            key: 'equal',
            value: user
        };
        this._AccountService.searchAccount(this.accountFilter).then(data => {
            if (data != null && data !== undefined && data.data.length) {
                this.userData = data.data;
                console.log( this.userData);
            }
            if (this.userData[0].name === user) {
                this.isExistUser = true;
            } else {
                this.isExistUser = false;
            }
        });    
    }
    submitEditAccount() {
        this.editAccountFormSubmitted = true;
        this.editAccountFormQualificationSubmitted = true;
        this.editAccountFormSubmitted = true;
        this.editCompanyAndAccountForm.value.account = {
            id: this.editAccountId,
            name: this.editCompanyAndAccountForm.controls.account.value
        };
        if (this.selectedAnchor !== undefined && this.selectedAnchor != null) {
            this.editCompanyAndAccountForm.value.anchor = {
                id: this.selectedAnchor.id,
                name: this.selectedAnchor.name
            };
        }
        if (this.selectedParentCompany !== undefined && this.selectedParentCompany != null) {
            this.editCompanyAndAccountForm.value.parentaccountname = {
                id: this.selectedParentCompany.id,
                name: this.selectedParentCompany.name
            };
        }
        if (this.selectedCompetition !== undefined && this.selectedCompetition != null) {
            this.editCompanyAndAccountForm.value.competition = this.selectedCompetition.map(value => {
                return {
                    id: value.id,
                    name: value.name
                };
            });
        }
        if (this.selectedNoPoach !== undefined && this.selectedNoPoach != null) {
            this.editCompanyAndAccountForm.value.noPoach = this.selectedNoPoach.map(value => {
                return {
                    id: value.id,
                    name: value.name
                };
            });
        }
        if (this.selectedBlackList !== undefined && this.selectedBlackList != null) {
            this.editCompanyAndAccountForm.value.blackList = this.selectedBlackList.map(value => {
                return {
                    id: value.id,
                    name: value.name
                };
            });
        }
        if (this.selectedBrand !== undefined && this.selectedBrand != null) {
            this.editCompanyAndAccountForm.value.brand = this.selectedBrand.map(value => {
                return {
                    id: value.id,
                    name: value.name
                };
            });
        }
        this.editCompanyAndAccountForm.value.empanelmentfromdate = moment({
            year: this.editCompanyAndAccountForm.controls.empanelmentfromdate.value.year,
            month: this.editCompanyAndAccountForm.controls.empanelmentfromdate.value.month,
            day: this.editCompanyAndAccountForm.controls.empanelmentfromdate.value.day
        }).format('YYYY-MM-DD');
        this.editCompanyAndAccountForm.value.empanelmenttodate = moment({
            year: this.editCompanyAndAccountForm.controls.empanelmenttodate.value.year,
            month: this.editCompanyAndAccountForm.controls.empanelmenttodate.value.month,
            day: this.editCompanyAndAccountForm.controls.empanelmenttodate.value.day
        }).format('YYYY-MM-DD');
        this.editCompanyAndAccountForm.value.revenuefromdate = moment({
            year: this.editCompanyAndAccountForm.controls.revenuefromdate.value.year,
            month: this.editCompanyAndAccountForm.controls.revenuefromdate.value.month,
            day: this.editCompanyAndAccountForm.controls.revenuefromdate.value.day
        }).format('YYYY-MM-DD');
        this.editCompanyAndAccountForm.value.revenuetodate = moment({
            year: this.editCompanyAndAccountForm.controls.revenuetodate.value.year,
            month: this.editCompanyAndAccountForm.controls.revenuetodate.value.month,
            day: this.editCompanyAndAccountForm.controls.revenuetodate.value.day
        }).format('YYYY-MM-DD');
        const updateData = {
            accountInfo: {
                ...this.editCompanyAndAccountForm.value, ...{
                    revenuecurrency: this.editCompanyAndAccountForm.value.revenuecurrency.currency || this.editCompanyAndAccountForm.value.revenuecurrency,
                    modifiedby: '1254968754',
                    modifiedusername: 'Avaneesh',
                    proposedservice: {
                        service_text: this.editCompanyAndAccountForm.value.proposedservice.serviceText,
                        id: this.editCompanyAndAccountForm.value.proposedservice.id
                    }
                }
            }, qualification: { ...this.editCompanyAndAccountQuaForm.value }
        } as any;
        if (this.editCompanyAndAccountForm.valid && this.editCompanyAndAccountQuaForm.valid && this.isExistUser === false) {
            this.editAccountFormSubmitted = false;
            this.accountSubmitting = true;
            this._AccountService.editAccount(updateData).then(data => {
                this.accountSubmitting = false;
                console.log(updateData);
                this.editAccountFormSubmitted = false;
                this.editAccountFormQualificationSubmitted = false;
                if (data.success === true) {
                    this._NotifierService.showSuccess('updated successfully');
                } else {
                    this._NotifierService.showError('Account not updated');
                }
            });
        } else if (this.isExistUser === true) {
            return;
        }
    }
}

