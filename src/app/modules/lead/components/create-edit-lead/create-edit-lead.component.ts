import { DataSearchModel } from './../../../../models/data-search.model';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faPlusCircle, faSearch, faGlobe, faPhoneAlt, faMapMarkerAlt, faCalendar, faSpinner, faArrowRight, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateCompanyAccountComponent } from '../create-company-account/create-company-account.component';
import { GooglePlaceModel } from 'src/app/models/google-place.model';
import { PaginationModel } from 'src/app/models/pagination.model';
import { DepartmentModel } from 'src/app/models/master-data/department.model';
import { ActivatedRoute } from '@angular/router';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { CountryModel } from 'src/app/models/master-data/country.model';
import { StateModel } from 'src/app/models/master-data/state.model';
import { MasterDataService } from 'src/app/services/master-data/master-data.service';
import { LeadService } from '../../services/lead.service';
import { ContactModel } from '../../models/contact.model';
import { SearchUserModel } from '../../models/search-user.model';
import { NotifierService } from 'src/app/services/notifier.service';
import { AccountAddressModel } from '../../models/account-address.model';
import CustomStore from 'devextreme/data/custom_store';
import { IndustryModel, IndustryGroupModel } from 'src/app/models/master-data/industry.model';
import { CurrencyModel } from 'src/app/models/master-data/currency.model';
import * as moment from 'moment';
import { CityModel } from 'src/app/models/master-data/city.model';
import { AccountModel } from 'src/app/modules/account/models/account.model';
@Component({
    selector: 'app-add-edit-lead',
    templateUrl: './create-edit-lead.component.html'
})
export class CreateEditLeadComponent implements OnInit {
    @Input() accountAndCompany: any;
    faGlobe = faGlobe;
    faPhoneAlt = faPhoneAlt;
    faMapMarkerAlt = faMapMarkerAlt;
    faPlusCircle = faPlusCircle;
    faSearch = faSearch;
    faCalendar = faCalendar;
    faInfoCircle = faInfoCircle;
    createLeadForm: FormGroup;
    searchToggle: boolean;
    submitted: boolean;
    divShow: boolean;
    defaultPagination: PaginationModel;
    departments: Array<DepartmentModel>;
    faTimesCircle = faTimesCircle;
    country: Array<CountryModel>;
    state: Array<StateModel>;
    editMode: boolean;
    gridDataSource: any;
    gridBoxValue: number[];
    states: Array<StateModel>;
    users: Array<SearchUserModel>;
    isAccount: number;
    contactModel: Array<AccountModel>;
    isAuxiliaryInfo: boolean;
    auxiliaryInfo: { name: string, boardnumberfull: string, websiteurl: string, description: string };
    createdLeadFormSubmitted: boolean;
    editLeadFormSubmitted: boolean;
    leadSubmitting: boolean;
    faSpinner = faSpinner;
    faArrowRight = faArrowRight;
    accountAddress: Array<AccountAddressModel>;
    editLeadForm: FormGroup;
    contact: ContactModel;
    industry: Array<IndustryModel>;
    industryGroup: Array<IndustryGroupModel>;
    currency: Array<CurrencyModel>;
    reportToName: string;
    editLeadId: string;
    accountName: string;
    commonFilter: DataSearchModel;
    commonFilters: DataSearchModel;
    industryGroupFilter: DataSearchModel;
    industryFilter: DataSearchModel;
    mobileNo: number;
    city: Array<CityModel>;
    constructor(
        private _FormBuilder: FormBuilder,
        private _NgbModal: NgbModal,
        private _ActivatedRoute: ActivatedRoute,
        private _MasterDataService: MasterDataService,
        private _LeadService: LeadService,
        private _NotifierService: NotifierService
    ) {
        this.createLeadForm = this._FormBuilder.group({
            leadType: ['Company', [Validators.required]],
            account: [null, [Validators.required]],
            anchor: [null, [Validators.required]],
            salutation: ['Mr', [Validators.required]],
            firstname: ['', [Validators.required]],
            midlename: [''],
            lastname: ['', [Validators.required]],
            workingmailid: ['', [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)]],
            jobgrade: [''],
            personalmobilecountrycode: [null, [Validators.required]],
            mobilenumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
            ofcphncountrycode: [null, [Validators.required]],
            officephone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(11)]],
            department: [null, [Validators.required]],
            designation: ['', [Validators.required]],
            skypid: [''],
            leadcategory: [''],
            addressid: ['', [Validators.required]]
        });
        this.searchToggle = false;
        this.submitted = false;
        this.divShow = true;
        this.defaultPagination = new PaginationModel();
        this.departments = Array<DepartmentModel>();
        this.country = Array<CountryModel>();
        this.states = Array<StateModel>();
        this.editMode = false;
        this.users = Array<SearchUserModel>();
        this.isAccount = 0;
        this.contactModel = Array<AccountModel>();
        this.isAuxiliaryInfo = false;
        this.auxiliaryInfo = { name: '', boardnumberfull: '', websiteurl: '', description: '' };
        this.createdLeadFormSubmitted = false;
        this.editLeadFormSubmitted = false;
        this.leadSubmitting = false;
        this.accountAddress = Array<AccountAddressModel>();
        this.editLeadForm = this._FormBuilder.group({
            leadsource: [''],
            istargeted: [''],
            title: [''],
            subtitle: [''],
            level: [''],
            reportto: [''],
            revenuepotential: [''],
            revenuetenurefrom: [''],
            revenuetenureto: [''],
            revenuepotentialinr: [''],
            revenuecurrency: [''],
            leadanchor: [''],
            referedby: [''],
            industry: [''],
            industrygroup: [''],
            description: ['']
        });
        this.contact = new ContactModel();
        this.industry = Array<IndustryModel>();
        this.industryGroup = Array<IndustryGroupModel>();
        this.currency = Array<CurrencyModel>();
        this.reportToName = '';
        this.editLeadId = '';
        this.commonFilter = new DataSearchModel();
        this.city = Array<CityModel>();
        this.commonFilter.filter.push({
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
        this.industryFilter = new DataSearchModel();
        this.industryFilter.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
    }
    ngOnInit() {
        this.editLeadId = this._ActivatedRoute.snapshot.params.id;
        this._ActivatedRoute.data.subscribe(data => {
            console.log(data);
            if (data.master[0]) {
                if (data.master[0].numFound === 1) {
                    this.editMode = true;
                    this.createLeadForm.patchValue(data.master[0].data[0]);
                    this.editLeadForm.patchValue(data.master[0].data[0]);
                    this.isAuxiliaryInfo = true;
                    // This will be changed
                    this.auxiliaryInfo = {
                        name: data.master[0].data[0].accountname,
                        boardnumberfull: data.master[0].data[0].officephone,
                        websiteurl: data.master[0].data[0].skypid,
                        description: data.master[0].data[0].skypid
                    };
                    this.accountName = this.auxiliaryInfo.name;
                    this.mobileNo = data.master[0].data[0].mobilenumber;
                    console.log(new Date(data.master[0].data[0].revenuetenurefrom).getFullYear());
                    this.editLeadForm.patchValue({
                        revenuetenurefrom: {
                            year: new Date(data.master[0].data[0].revenuetenurefrom).getFullYear(),
                            month: new Date(data.master[0].data[0].revenuetenurefrom).getMonth() + 1,
                            day: new Date(data.master[0].data[0].revenuetenurefrom).getDay()
                        },
                        revenuetenureto: {
                            year: new Date(data.master[0].data[0].revenuetenureto).getFullYear(),
                            month: new Date(data.master[0].data[0].revenuetenureto).getMonth() + 1,
                            day: new Date(data.master[0].data[0].revenuetenureto).getDay()
                        },
                        reportto: [data.master[0].data[0].reporttoid]
                    });
                    this.getAccountAddress(data.master[0].data[0].accountname);
                    if (this.editMode) {
                        this.getReporting(data.master[0].data[0].accountid);
                    }
                }
            }
            this.departments = data.master[1].data;
            this.country = data.master[2].data;
        }),
            (() => {
                this.getIndustry('');
                this.getIndustryGroup('');
                this.getCurrency('');
                this.searchDepartment('');
                this.searchCountrycode('');
            })();
        this.searchUser('');
        this.createLeadForm.controls.ofcphncountrycode.valueChanges.subscribe(data => {
            if (data !== '' && data !== null) {
                this.country.filter(country => {
                    console.log(country);
                    if (country.id === data.id) {
                        this.createLeadForm.controls.officephone.setValidators(Validators.maxLength(data.validationdigit));
                        this.createLeadForm.updateValueAndValidity({ emitEvent: true });
                        this.searchCityCode('', data.id);
                    }
                });
            } else {
                this.city = [];
                this.createLeadForm.controls.officephone.reset();
            }
        });
        this.createLeadForm.controls.account.valueChanges.subscribe(data => {
            if (data) {
                this.isAuxiliaryInfo = true;
                this.auxiliaryInfo = data;
                this.getAccountAddress(data.name);
                if (this.editMode) {
                    this.getReporting(data.id);
                }
            } else {
                this.isAuxiliaryInfo = false;
            }
        });
        this.createLeadForm.controls.leadType.valueChanges.subscribe(() => {
            this.contactModel = [];
            this.createLeadForm.controls.account.reset();
            if (this.createLeadForm.get('leadType').value === 'Company') {
                this.isAccount = 0;
            } else {
                this.isAccount = 1;
            }
        });
        this.editLeadForm.controls.revenuecurrency.valueChanges.subscribe(data => {
            this.currency.forEach(curr => {
                if (curr.currency === data) {
                    this.editLeadForm.patchValue({
                        revenuepotentialinr: this.editLeadForm.controls.revenuepotential.value * curr.rate
                    });
                }
            });
        });
    }
    searchCountrycode(event: string) {
        this._MasterDataService.getCountry(this.defaultPagination.perPage, this.defaultPagination.next, '', event).then(country => {
            this.country = country.data;
        });
    }
    searchCityCode(event: string, id: string | null, ) {
        this._MasterDataService.getCity(this.defaultPagination.perPage, this.defaultPagination.next, '', event, '', id || this.createLeadForm.controls.boardcountrycode.value.id).then(city => {
            this.city = city.data;
        });
    }
    getCurrency(currency: string) {
        this.commonFilter.perpage = this.defaultPagination.perPage;
        this.commonFilter.skip = this.defaultPagination.next;
        this.commonFilter.orderby = 'id';
        this._MasterDataService.getCurrency(this.commonFilter)
            .then(data => {
                this.currency = data.data;
            });
    }
    searchDepartment(event: string) {
        this.commonFilter.perpage = this.defaultPagination.perPage;
        this.commonFilter.skip = this.defaultPagination.next;
        this.commonFilter.orderby = 'id';
        this.commonFilter.filter[1] = {
            column: 'name',
            key: 'contains',
            value: event
        };
        this._MasterDataService.getDepartment(this.commonFilter).then(depart => {
            this.departments = depart.data;
        });
    }
    getIndustry(event: string) {
        this.industryFilter.perpage = this.defaultPagination.perPage;
        this.industryFilter.skip = this.defaultPagination.next;
        this.industryFilter.orderby = 'id';
        this.industryFilter.filter[1] = {
            column: 'industry',
            key: 'contains',
            value: event
        };
        this._MasterDataService.getIndustry(this.industryFilter).
            then(data => {
                this.industry = data.data;
            });
    }
    getIndustryGroup(event: string) {
        this.industryGroupFilter.perpage = this.defaultPagination.perPage;
        this.industryGroupFilter.skip = this.defaultPagination.next;
        this.industryGroupFilter.orderby = 'id';
        this.industryGroupFilter.filter[1] = {
            column: 'industry_group',
            key: 'contains',
            value: event
        };
        this._MasterDataService.getIndustryGroup(this.industryGroupFilter).
            then(data => {
                this.industryGroup = data.data;
            });
    }
    getReporting(accountId: string) {
        this._LeadService.getReportingTo(accountId, this.defaultPagination.perPage, this.defaultPagination.next)
            .then(value => {
                this.gridDataSource = new CustomStore({
                    loadMode: 'raw',
                    key: 'id',
                    cacheRawData: false,
                    load: () => {
                        return (value as any).data;
                    }
                });
            });
    }
    gridBox_displayExpr(item: any) {
        if (item !== undefined) {
            this.reportToName = item.name;
        }
        return item && item.name + ' <' + item.accountname + '>' + item.status + '>';
    }
    getAccountAddress(accountName: string) {
        this._LeadService.getAccountAddress(accountName, this.defaultPagination.perPage, this.defaultPagination.next)
            .then(data => {
                this.accountAddress = data.data;
            });
    }
    searchUser(event: string) {
        this._LeadService.searchUserByUsername(event, this.defaultPagination.perPage, this.defaultPagination.next)
            .then(data => {
                this.users = data.data;
            });
    }
    searchCompany(event: string) {
        this._LeadService.searchCompany(this.isAccount, event, this.defaultPagination.perPage, this.defaultPagination.next)
            .then(data => {
                this.contactModel = data.data;
            });
    }
    openAddCompanyAccountModal() {
        const modalRef = this._NgbModal.open(CreateCompanyAccountComponent, {
            ariaLabelledBy: `Add ${this.createLeadForm.get('leadType').value} Details `,
            centered: true,
            size: 'lg',
            backdrop: 'static'
        });
        modalRef.componentInstance.leadName = this.createLeadForm.get('leadType').value;
        modalRef.componentInstance.country = this.country;
        modalRef.componentInstance.isAccount = this.isAccount;
        modalRef.componentInstance.accountAndCompany.subscribe(data => {
            this.contactModel = [data];
            this.createLeadForm.patchValue({
                account: data.name
            });
        });
    }
    location(event: GooglePlaceModel) {
        console.log(event);
    }
    getModifiedValue() {
        delete this.createLeadForm.value.leadType;
        delete this.createLeadForm.value.boardcountrycode;
        delete this.createLeadForm.value.boardcitycode;
        delete this.createLeadForm.value.boardNumber;
        if (this.editLeadForm.controls.reportto.value === '') {
            this.editLeadForm.patchValue({
                reportto: ['']
            });
        }
        if (this.editMode) {
            return {
                ...this.createLeadForm.value, ...this.editLeadForm.value, ...{
                    createdby: 'Rajesh', modifiedby: 'Rajesh', createdusername: 'Rajesh', reportto: { id: this.editLeadForm.controls.reportto.value[0], name: this.reportToName },
                    revenuetenurefrom: moment({ year: this.editLeadForm.controls.revenuetenurefrom.value.year, month: this.editLeadForm.controls.revenuetenurefrom.value.month, day: this.editLeadForm.controls.revenuetenurefrom.value.day }).format('YYYY-MM-DD'),
                    revenuetenureto: moment({ year: this.editLeadForm.controls.revenuetenurefrom.value.year, month: this.editLeadForm.controls.revenuetenurefrom.value.month, day: this.editLeadForm.controls.revenuetenurefrom.value.day }).format('YYYY-MM-DD')
                }
            };
        } else { return { ...this.createLeadForm.value, ...{ createdby: 'Rajesh', modifiedby: 'Rajesh', createdusername: 'Rajesh' } }; }
    }
    createLeadFormSubmit() {
        // console.log(this.getModifiedValue());
        if (this.editMode) {
            this.editLeadFormSubmitted = true;
            this.createdLeadFormSubmitted = true;
            if (this.editLeadForm.valid && this.createLeadForm.valid) {
                this.editLeadFormSubmitted = false;
                this.createdLeadFormSubmitted = false;
                this.leadSubmitting = true;
                this._LeadService.updateLeadById(this.editLeadId, this.getModifiedValue())
                    .then(data => {
                        this.leadSubmitting = false;
                        if (data.success === true) {
                            this._NotifierService.showSuccess('Lead updated successfully');
                        } else {
                            this._NotifierService.showError('Lead not updated');
                        }
                    });
            }
        } else {
            this.createdLeadFormSubmitted = true;
            if (this.createLeadForm.valid) {
                this.createdLeadFormSubmitted = false;
                this.leadSubmitting = true;
                this._LeadService.createLead(this.getModifiedValue())
                    .then(data => {
                        this.leadSubmitting = false;
                        if (data.success === true) {
                            this._NotifierService.showSuccess('Lead created successfully');
                            this.createLeadForm.reset();
                        } else {
                            this._NotifierService.showError('Lead not created');
                        }
                    });
            }
        }
    }
}