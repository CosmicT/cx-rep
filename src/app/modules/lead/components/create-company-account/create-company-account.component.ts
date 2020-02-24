import { DataSearchModel } from './../../../../models/data-search.model';
import { Component, Input, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { MasterDataService } from 'src/app/services/master-data/master-data.service';
import { IndustryModel, IndustryGroupModel } from 'src/app/models/master-data/industry.model';
import { PaginationModel } from 'src/app/models/pagination.model';
import { faPlusCircle, faEdit, faTrashAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FilterModel } from 'src/app/models/filter.model';
import { LeadService } from '../../services/lead.service';
import { NotifierService } from 'src/app/services/notifier.service';
import { faSpinner, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ContactModel } from '../../models/contact.model';
import { CountryModel } from '../../../../models/master-data/country.model';
import { StateModel } from '../../../../models/master-data/state.model';
import { CityModel } from '../../../../models/master-data/city.model';
import { AccountModel } from 'src/app/modules/account/models/account.model';

@Component({
    selector: 'app-company-account',
    templateUrl: './create-company-account.component.html'
})
export class CreateCompanyAccountComponent implements OnInit {
    @Input() leadName: string;
    @Input() country: Array<CountryModel>;
    @Input() isAccount: number;
    @Output() accountAndCompany: EventEmitter<any> = new EventEmitter();
    createCompanyAndAccountForm: FormGroup;
    createCompanyAndAccountFormSubmitted: boolean;
    createCompanyAndAccountFormSubmitting: boolean;
    industry: Array<IndustryModel>;
    industryGroup: Array<IndustryGroupModel>;
    defaultPagination: PaginationModel;
    addCustomCompanyAndAccount: [{ name: string, id: number }];
    states: Array<StateModel>;
    faPlusCircle = faPlusCircle;
    faEdit = faEdit;
    faTrashAlt = faTrashAlt;
    addressForm: FormGroup;
    addressFormSubmitted: boolean;
    addressFormSubmitting: boolean;
    addressArray: FormArray;
    cities: Array<CityModel>;
    filterModel: FilterModel;
    faArrowRight = faArrowRight;
    faSpinner = faSpinner;
    faInfoCircle = faInfoCircle;
    contactModel: Array<AccountModel>;
    commonFilter: DataSearchModel;
    commonFilters: DataSearchModel;
    constructor(
        private _NgbActiveModal: NgbActiveModal,
        private _FormBuilder: FormBuilder,
        private _MasterDataService: MasterDataService,
        private _ElementRef: ElementRef,
        private _LeadService: LeadService,
        private _NotifierService: NotifierService
    ) {
        this.leadName = '';
        this.createCompanyAndAccountForm = this._FormBuilder.group({
            leadType: ['', [Validators.required]],
            name: [null, [Validators.required]],
            industryGroup: [null, [Validators.required]],
            industry: [null, [Validators.required]],
            leadCategory: [''],
            countryCode: [null, [Validators.required]],
            boardnumber: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
            boardnumbercitycode: [null, [Validators.required]],
            isaccount: [''],
            website: ['', [Validators.required]],
            description: ['', [Validators.maxLength(500)]],
            accountaddress: this._FormBuilder.array([])
        });
        this.createCompanyAndAccountFormSubmitted = false;
        this.createCompanyAndAccountFormSubmitting = false;
        this.addressForm = this._FormBuilder.group({
            country: [null, [Validators.required]],
            state: [null, [Validators.required]],
            city: [null, [Validators.required]],
            street: ['', [Validators.required]],
            pincode: ['', [Validators.required]],
            headquater: [false, [Validators.required]],
            shipping: [false, [Validators.required]],
            billling: [false, [Validators.required]],
            site: [false, [Validators.required]]
        });
        this.addressFormSubmitted = false;
        this.industry = Array<IndustryModel>();
        this.industryGroup = Array<IndustryGroupModel>();
        this.defaultPagination = new PaginationModel();
        this.addCustomCompanyAndAccount = [{ name: '', id: 0 }];
        this.country = Array<CountryModel>();
        this.states = Array<StateModel>();
        this.cities = Array<CityModel>();
        this.filterModel = new FilterModel();
        this.isAccount = 0;
        this.contactModel = Array<AccountModel>();
        this.commonFilter = new DataSearchModel();
        this.commonFilters = new DataSearchModel();
        this.commonFilter.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.commonFilters.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
    }
    ngOnInit() {
        this.valueChanges();
        this.searchIndustry('');
        this.searchIndustryGroup('');
        this.searchCountry('');
        this.createCompanyAndAccountForm.patchValue({
            leadType: this.leadName
        });
        this.addressForm.controls.state.valueChanges.subscribe(data => {
            if (data !== '' && data !== null) {
                this.searchCity('', data.id);
            } else {
                this.cities = [];
            }
        });

        this.createCompanyAndAccountForm.controls.countryCode.valueChanges.subscribe(data => {
            if (data !== '' && data !== null) {
                this.country.filter(country => {
                    if (country.id === data.id) {
                        this.searchCityCode('', String(country.id));
                    }
                });
            } else {
                this.cities = [];
                this.createCompanyAndAccountForm.controls.boardnumbercitycode.reset();
            }
        });
        this.addressForm.controls.country.valueChanges.subscribe(data => {
            if (data !== '' && data !== null) {
                this.searchState('', data.id);
            } else {
                this.states = [];
            }
        });

    }
    searchCountryCode(event: string) {
        this._MasterDataService.getCountry(this.defaultPagination.perPage, this.defaultPagination.next, '', event).then(country => {
            this.country = country.data;
        });
    }
    searchCityCode(event: string, id: string | null) {
        if (this.createCompanyAndAccountForm.controls.countryCode.value) {
            this._MasterDataService.getCity(this.defaultPagination.perPage, this.defaultPagination.next, '', event, '', id || this.createCompanyAndAccountForm.controls.countryCode.value.id).then(city => {
                this.cities = city.data;
            });
        }
    }
    searchCountry(event: string) {
        this._MasterDataService.getCountry(this.defaultPagination.perPage, this.defaultPagination.next, event, '').then(data => {
            this.country = data.data;
        });
    }
    searchState(event: string, id: number | null) {
        if (this.addressForm.controls.country.value) {
            this._MasterDataService.getState(id || this.addressForm.controls.country.value.id, this.defaultPagination.perPage, this.defaultPagination.next, event, '').then(state => {
                this.states = state.data;
            });
        }
    }
    searchCity(event: string, id: number | null) {
        if (this.addressForm.controls.state.value) {
            this._MasterDataService.getCity(this.defaultPagination.perPage, this.defaultPagination.next, event, '', id || this.addressForm.controls.state.value.id, '').then(city => {
                this.cities = city.data;
            });
        }
    }
    searchIndustry(event: string) {
        this.commonFilters.perpage = this.defaultPagination.perPage;
        this.commonFilters.skip = this.defaultPagination.next;
        this.commonFilters.orderby = 'id';
        this.commonFilters.filter[1] = {
            column: 'industry',
            key: 'contains',
            value: event
        };
        this._MasterDataService.getIndustry(this.commonFilters).then(industry => {
            this.industry = industry.data;
            console.log(this.industry);
        });
    }
    searchIndustryGroup(event: string) {
        this.commonFilter.perpage = this.defaultPagination.perPage;
        this.commonFilter.skip = this.defaultPagination.next;
        this.commonFilter.orderby = 'id';
        this.commonFilter.filter[1] = {
            column: 'industry_group',
            key: 'contains',
            value: event
        };
        this._MasterDataService.getIndustryGroup(this.commonFilter).then(industryGroup => {
            this.industryGroup = industryGroup.data;
            console.log(this.industryGroup);
        });
    }
    get accountaddress(): FormArray {
        return this.createCompanyAndAccountForm.get('accountaddress') as FormArray;
    }
    searchCompany(event: string) {
        this._LeadService.searchCompany(this.isAccount, event, this.defaultPagination.perPage, this.defaultPagination.next)
            .then(data => {
                this.contactModel = data.data;
            });
    }
    valueChanges() {
        this.addressForm.controls.country.valueChanges.subscribe(() => {
            this.addressForm.patchValue({
                state: null,
                city: null
            });
        });
        this.addressForm.controls.state.valueChanges.subscribe(() => {
            this.addressForm.patchValue({
                city: null
            });
        });
    }
    closeActiveModal() {
        this._NgbActiveModal.close();
    }
    setAddress() {
        this.addressFormSubmitted = true;
        if (this.addressForm.valid) {
            this.addressFormSubmitted = false;
            this.accountaddress.push(this._FormBuilder.group({
                country: [this.addressForm.value.country],
                state: [this.addressForm.value.state],
                city: [this.addressForm.value.city],
                street: [this.addressForm.value.street],
                pincode: [this.addressForm.value.pincode],
                headquater: [this.addressForm.value.headquater || false],
                shipping: [this.addressForm.value.shipping || false],
                billling: [this.addressForm.value.billling || false],
                site: [this.addressForm.value.site]
            }));
            this.addressForm.reset();
        }
    }
    getModifiedValue() {
        if (this.createCompanyAndAccountForm.value.leadType === 'Account') {
            this.createCompanyAndAccountForm.patchValue({
                isaccount: 1
            });
        } else {
            this.createCompanyAndAccountForm.patchValue({
                isaccount: 0
            });
        }
        return {
            ...this.createCompanyAndAccountForm.value, ...{
                name: this.createCompanyAndAccountForm.controls.name.value.name,
                createdby: 'Rajesh',
                modifiedby: 'Rajesh',
                createdusername: 'Rajesh',
                modifiedusername: 'Rajesh'
            }
        };
    }
    editAddress(index: number): void {
        this.addressForm.patchValue(this.createCompanyAndAccountForm.value.accountaddress[index]);
        this.accountaddress.removeAt(index);
    }
    deleteAddress(index: number): void {
        this.accountaddress.removeAt(index);
    }
    async createCompanyAndAccountFormSubmit() {
        this.createCompanyAndAccountFormSubmitted = true;
        if (this.createCompanyAndAccountForm.valid) {
            await this.getModifiedValue();
            this.createCompanyAndAccountFormSubmitted = false;
            this.createCompanyAndAccountFormSubmitting = true;
            this._LeadService.addAccountAndCompany(this.getModifiedValue())
                .then(data => {
                    this.createCompanyAndAccountFormSubmitting = false;
                    console.log(data);
                    if (data.success === true) {
                        this._NotifierService.showSuccess(`${this.leadName} created successfully`);
                        this.accountAndCompany.emit(data.data);
                        this.createCompanyAndAccountForm.reset();
                        this._NgbActiveModal.close();
                    } else {
                        this._NotifierService.showError(`${this.leadName} not created`);
                    }
                });
        } else {
            const invalidElements = this._ElementRef.nativeElement.getElementsByClassName('ng-invalid');
            if (invalidElements.length > 0) {
                invalidElements[0].focus();
            }
        }
    }
}