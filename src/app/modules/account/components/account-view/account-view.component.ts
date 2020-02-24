import { Component, OnInit } from '@angular/core';
import {
    faGlobe,
    faMapMarkerAlt,
    faBuilding,
    faTimesCircle,
    faClock,
    faListAlt,
    faEnvelope,
    faUsers,
    faPenSquare,
    faTimes,
    faRetweet,
    faList,
    faFileAlt,
    faPhoneAlt,
    faSearch
} from '@fortawesome/free-solid-svg-icons';
import { AccountService } from '../../services/account.service';
import { PaginationModel } from 'src/app/models/pagination.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountQualificationHistroyModel, AccountQualificationHistoryAndQualificationParameterModel } from '../../models/account-qualification.model';
import { AccountOrgStructureModel } from '../../models/account-org-structure.model';
import { CompetitionModel } from '../../models/competition.model';
import { AccountModel } from '../../models/account.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MasterDataService } from 'src/app/services/master-data/master-data.service';
import CustomStore from 'devextreme/data/custom_store';
import { DataSearchModel } from 'src/app/models/data-search.model';
import { CurrencyModel } from 'src/app/models/master-data/currency.model';
import { AccountBusinessStructureModel } from '../../models/account-business-structure.model';
import { AccountContactQualificationModel } from 'src/app/modules/contact/models/account-contact-qualification.model';
import { QualificationParameterModel, QualificationScaleModel } from 'src/app/models/master-data/qualification.model';
import { NotifierService } from 'src/app/services/notifier.service';
@Component({
    selector: 'app-account-view',
    templateUrl: './account-view.component.html'
})
export class AccountViewComponent implements OnInit {
    divShow: boolean;
    faTimesCircle = faTimesCircle;
    faBuilding = faBuilding;
    faGlobe = faGlobe;
    faClock = faClock;
    faListAlt = faListAlt;
    faEnvelope = faEnvelope;
    faUsers = faUsers;
    faPenSquare = faPenSquare;
    faTimes = faTimes;
    faList = faList;
    faRetweet = faRetweet;
    faFileAlt = faFileAlt;
    faPhoneAlt = faPhoneAlt;
    faMapMarkerAlt = faMapMarkerAlt;
    faSearch = faSearch;
    defaultPagination: PaginationModel;
    accountId: string;
    accountViewId: string;
    account: AccountModel;
    closeResult: string;
    qualificationHistory: any;
    orgStructure: Array<AccountOrgStructureModel>;
    businessStructure: Array<AccountBusinessStructureModel>;
    competition: CompetitionModel;
    currency: Array<CurrencyModel>;
    qualificationParamterForm: FormGroup;
    accountOrgStructureForm: FormGroup;
    accountBusinessStructureForm: FormGroup;
    gridDataSourcePara: any;
    gridDataSource: any;
    gridBoxValuePara: [];
    gridBoxValue = [];
    organizationStructureDataSource: any;
    organizationStructureSearch: DataSearchModel;
    currencySearch: DataSearchModel;
    qualificationHistorySearch: DataSearchModel;
    parameterSearch: DataSearchModel;
    scaleSearch: DataSearchModel;
    qualificationParaSearch: DataSearchModel;
    orgStructureSearch: DataSearchModel;
    businessStructureSearch: DataSearchModel;
    qualificationParamter: Array<AccountContactQualificationModel>;
    qualificationParameterDataSource: any;
    businessDataSource: any;
    qualificationParameterValue: AccountQualificationHistoryAndQualificationParameterModel;
    orgStructureForm: AccountOrgStructureModel;
    businessStructureForm: AccountBusinessStructureModel;

    parentName: string;
    scaleName: string;
    weightageNumber: number;
    qualificationParameter: Array<QualificationParameterModel>;
    qualificationScale: Array<QualificationScaleModel>;

    constructor(
        private _AccountService: AccountService,
        private _ActivatedRoute: ActivatedRoute,
        private _NgbModal: NgbModal,
        private _formBuilder: FormBuilder,
        private _MasterDataService: MasterDataService,
        private _NotifierService: NotifierService,
        private _Router: Router
    ) {
        this.divShow = true;
        this.closeResult = '';
        this.accountId = '';
        this.defaultPagination = new PaginationModel();
        this.account = new AccountModel();
        // this.qualificationHistory = Array<AccountQualificationHistroyModel>();
        this.qualificationParamter = Array<AccountContactQualificationModel>();
        this.orgStructure = Array<AccountOrgStructureModel>();
        this.competition = new CompetitionModel();
        this.currency = Array<CurrencyModel>();
        this.businessStructure = Array<AccountBusinessStructureModel>();
        this.qualificationParamterForm = this._formBuilder.group({
            parameter: [''],
            scale: ['']
        });
        this.accountOrgStructureForm = this._formBuilder.group({
            jobgrade: ['', Validators.required],
            designation: ['', Validators.required],
            expfrom: ['', Validators.required],
            expto: ['', Validators.required],
            industrydesignationlevel: ['', Validators.required],
            ctccurrency: [null, Validators.required],
            ctcfrom: [0, Validators.required],
            ctcto: [0, Validators.required],
            ctcrange: ['INR'],
            ctcfrominr: [0],
            ctctoinr: [0],
            remarks: ['']
        });
        this.accountBusinessStructureForm = this._formBuilder.group({
            division: []
        });
        this.qualificationHistorySearch = new DataSearchModel();
        this.qualificationHistorySearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.parameterSearch = new DataSearchModel();
        this.parameterSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.scaleSearch = new DataSearchModel();
        this.scaleSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.qualificationParaSearch = new DataSearchModel();
        this.qualificationParaSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.orgStructureSearch = new DataSearchModel();
        this.orgStructureSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.businessStructureSearch = new DataSearchModel();
        this.businessStructureSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.currencySearch = new DataSearchModel();
        this.currencySearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
    }
    ngOnInit() {
        this.accountId = this._ActivatedRoute.snapshot.params.id;
        this._ActivatedRoute.data.subscribe(data => {
            console.log(data);
            if (data.account[0] !== undefined) {
                this.account = data.account[0];
            }
        });
        this._AccountService.getCompetition(this.defaultPagination.perPage, this.defaultPagination.next, '', this.accountId).then(data => {
            this.competition = data.data;
        });

        this.qualificationParamterForm.controls.parameter.valueChanges.subscribe(data => {
            if (data) {
                this.getQualificationScale(data);
            } else {
                this.gridDataSource = [];
                this.qualificationParamterForm.controls.scale.reset();
            }
        });
        this.accountOrgStructureForm.controls.ctccurrency.valueChanges.subscribe(() => {
            this.accountOrgStructureForm.patchValue({
                ctcfrom: null,
                ctcto: null,
                ctcfrominr: null,
                ctctoinr: null
            });
        });
        this.accountOrgStructureForm.controls.ctcfrom.valueChanges.subscribe(data => {
            if (data !== '' && data !== null) {
                this.accountOrgStructureForm.patchValue({
                    ctcfrominr: data * this.accountOrgStructureForm.controls.ctccurrency.value.rate,
                });
            }
        });
        this.accountOrgStructureForm.controls.ctcto.valueChanges.subscribe(data => {
            if (data !== '' && data !== null) {
                this.accountOrgStructureForm.patchValue({
                    ctctoinr: data * this.accountOrgStructureForm.controls.ctccurrency.value.rate
                });
            }
        });

        this.organizationStructureDataGrid();
        this.getQualificationHistory();
        this.getQualificationParameter();
        this.businessStructureDataGrid();
        this.qualificationParameterDataGrid();
        this.searchCurrency('');
    }
    navigateToEditPage() {
        this._Router.navigate([`/account/edit-account-and-company/${this.accountId}`]);
    }
    openQualificationParameter(content: any) {
        this._NgbModal.open(content, {
            ariaLabelledBy: 'Qualification Parameter',
            backdrop: 'static',
            size: 'lg',
            centered: true
        }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
    }
    openOrgStructure(data: any) {
        this._NgbModal.open(data, {
            ariaLabelledBy: 'Account Organization Structure',
            backdrop: 'static',
            size: 'lg',
            centered: true
        }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    openBusinessStructure(modal: any) {
        this._NgbModal.open(modal, {
            ariaLabelledBy: 'Account Business Structure',
            backdrop: 'static',
            size: 'sm',
            centered: true
        }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getQualificationHistory() {
        this.qualificationHistorySearch.perpage = this.defaultPagination.perPage;
        this.qualificationHistorySearch.skip = this.defaultPagination.next;
        this.qualificationHistorySearch.orderby = 'accountid';
        this.qualificationHistorySearch.filter.push({
            column: 'accountid',
            key: 'equal',
            value: this.accountId
        });
        this._AccountService.getAccountQualificationHistory(this.qualificationHistorySearch).then(data => {
            this.qualificationHistory = data.data[0] as any;
        });
    }
    getQualificationParameter() {
        this.parameterSearch.perpage = this.defaultPagination.perPage;
        this.parameterSearch.skip = this.defaultPagination.next;
        this.parameterSearch.orderby = 'id';
        this.parameterSearch.filter.push({
            column: 'parent_type',
            key: 'equal',
            value: '1'
        });
        this._MasterDataService.getQualificationParameter(this.parameterSearch).then(data => {
            this.qualificationParameter = data.data;
            this.gridDataSourcePara = new CustomStore({
                loadMode: 'raw',
                key: 'id',
                cacheRawData: false,
                load: () => {
                    return data.data;
                }
            });
        });
    }
    getQualificationScale(id: number) {
        this.scaleSearch.perpage = this.defaultPagination.perPage;
        this.scaleSearch.skip = this.defaultPagination.next;
        this.scaleSearch.orderby = 'id';
        this.scaleSearch.filter[0] = {
            column: 'qualificationid',
            key: 'equal',
            value: String(id)
        };
        this._MasterDataService.getQualificationScale(this.scaleSearch).then(data => {
            this.qualificationScale = data.data;
            this.gridDataSource = new CustomStore({
                loadMode: 'raw',
                key: 'id',
                cacheRawData: false,
                load: () => {
                    return data.data;
                }
            });
        });
    }
    gridBox_displayExprPara(item: any) {
        if (item) {

            return item.subParameters;
        }
    }
    gridBox_displayExpr(item: any) {
        if (item) {

            return item.scale + '<' + item.weightage + '>';
        }

    }
    selectionPara(event: any) {
        if (event && event.selectedRowsData) {
            this.qualificationParameterValue = {
                ...this.qualificationParameterValue,
                ...{
                    parametername: event.selectedRowsData[0].subParameters
                }
            };
        }
    }
    selectionScale(event: any) {
        if (event && event.selectedRowsData) {
            this.qualificationParameterValue = {
                ...this.qualificationParameterValue, ...{
                    scaletext: event.selectedRowsData[0].scale,
                    weightage: event.selectedRowsData[0].weightage
                }
            };
        }
    }
    addQualificationParameter() {
        this.qualificationParameterValue = {
            ...this.qualificationParameterValue, ...{
                parenttype: 'Account',
                createdby: 'shubham',
                createdusername: 'shubham',
                parameterid: this.qualificationParamterForm.controls.parameter.value[0],
                parameterscaleid: this.qualificationParamterForm.controls.scale.value[0],
                parentid: this.accountId
            }
        };
        this._AccountService.createAccountQualificationHistoryAndQualificationParameter(this.qualificationParameterValue).then(data => {
            if (data.success === true) {
                this._NotifierService.showSuccess('Added Successfully!');

            } else {
                this._NotifierService.showError('No data are added!');
            }
        });
    }
    qualificationParameterDataGrid() {
        this.qualificationParaSearch.perpage = this.defaultPagination.perPage;
        this.qualificationParaSearch.skip = this.defaultPagination.next;
        this.qualificationParaSearch.orderby = 'id';
        this.qualificationParaSearch.filter.push({
            column: 'parenttype',
            key: 'equal',
            value: 'account'
        });
        this._AccountService.searchAccountContactQualification(this.qualificationParaSearch)
            .then(data => {
                this.qualificationParamter = data.data;
                this.qualificationParameterDataSource = new CustomStore({
                    loadMode: 'raw',
                    key: 'id',
                    cacheRawData: false,
                    load: () => {
                        return data.data;
                    }
                });
            });
    }
    organizationStructureDataGrid() {
        this.orgStructureSearch.perpage = this.defaultPagination.perPage;
        this.orgStructureSearch.skip = this.defaultPagination.next;
        this.orgStructureSearch.orderby = 'id';
        this._AccountService.searchAccountOrgStructure(this.orgStructureSearch).then(data => {
            this.orgStructure = data.data;
            this.organizationStructureDataSource = new CustomStore({
                loadMode: 'raw',
                key: 'id',
                cacheRawData: false,
                load: (loadOptions) => {
                    return data.data;
                }
            });
        });
    }
    searchCurrency(event: string) {
        this.currencySearch.perpage = this.defaultPagination.perPage;
        this.currencySearch.skip = this.defaultPagination.next;
        this.currencySearch.orderby = 'id';
        this.currencySearch.filter[1] = {
            column: 'currency',
            key: 'contains',
            value: event
        };
        this._MasterDataService.getCurrency(this.currencySearch).then(data => {
            this.currency = data.data;
        });
    }
    addOrgStructure() {
        this.accountOrgStructureForm = {
            ...this.accountOrgStructureForm.value, ...{
                createdby: 'shubham',
                createdusername: 'shubham',
                accountid: this.accountId,
                ctccurrency: this.accountOrgStructureForm.value.ctccurrency.currency
            }
        };
        this._AccountService.createAccountOrgStructure(this.accountOrgStructureForm as any).then(data => {
            if (data.success === true) {
                this._NotifierService.showSuccess('Added Sucessfully!');

            } else {
                this._NotifierService.showError('No Data added');
            }
        });
    }
    businessStructureDataGrid() {
        this.businessStructureSearch.perpage = this.defaultPagination.perPage;
        this.businessStructureSearch.skip = this.defaultPagination.next;
        this.businessStructureSearch.orderby = 'id';
        this._AccountService.searchAccountBusinessStructure(this.businessStructureSearch).then(data => {
            this.businessStructure = data.data;
            this.businessDataSource = new CustomStore({
                loadMode: 'raw',
                key: 'id',
                cacheRawData: false,
                load: () => {
                    return data.data;
                }
            });
        });
    }
    addbusinessStructure() {
        this.accountBusinessStructureForm = {
            ...this.accountBusinessStructureForm.value, ...{
                createdby: 'shubham',
                createdusername: 'shubham',
                accountid: this.accountId
            }
        };
        this._AccountService.createAccountBusinessStructure(this.accountBusinessStructureForm as any).then(data => {
            if (data.success === true) {
                this._NotifierService.showSuccess('Added Sucessfully!');
            } else {
                this._NotifierService.showError('No Data added!');
            }
        });
    }
    editorPreparing(event: string) {

    }
    rowValidating(event: string) {

    }
    selectionChanged(event: string) {

    }
    onReorder(event: any) {
        const visibleRows = event.component.getVisibleRows();
        const toIndex = this.orgStructure.indexOf(visibleRows[event.toIndex].data);
        const fromIndex = this.orgStructure.indexOf(event.itemData);
        this.orgStructure.splice(fromIndex, 1);
        this.orgStructure.splice(toIndex, 0, event.itemData);
    }

}