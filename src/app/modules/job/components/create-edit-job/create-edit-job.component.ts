import { Component, OnInit } from '@angular/core';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import CustomStore from 'devextreme/data/custom_store';
import { faPlusCircle, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MasterDataService } from 'src/app/services/master-data/master-data.service';
import { PaginationModel } from 'src/app/models/pagination.model';
import { FunctionalModel, SubFunctionalModel, SuperFunctionalModel, FunctionalGroupModel } from 'src/app/models/master-data/functional.model';
import { TemplateMailBodyModel } from '../../models/template-mail-body.model';
import { JobService } from '../../../job/services/job.service';
import { DataSearchModel } from 'src/app/models/data-search.model';
import { EmployeeTargetModel } from '../../../../../app/models/master-data/employee-target.model';
import { LeadService } from '../../../lead/services/lead.service';
import { AccountService } from 'src/app/modules/account/services/account.service';
import { AccountIndustryModel } from 'src/app/modules/account/models/account-industry.model';
import { AccountClassificationModel } from 'src/app/modules/account/models/account-classification.model';
import { AccountSubclassificationModel } from 'src/app/modules/account/models/account-subclassification.model';
import { AccountSuperClassificationModel } from 'src/app/modules/account/models/account-superClassification.model';
import { AccountProductModel } from 'src/app/modules/account/models/account-product.model';
import { AccountServiceModel } from 'src/app/modules/account/models/account-services.model';
import { AccountToolAndTechModel } from 'src/app/modules/account/models/account-tool-and-tech.model';
import { CompetitionModel } from 'src/app/modules/account/models/competition.model';
import { AccountIndustryGroupModel } from 'src/app/modules/account/models/account-industry-group.model';
import { ContactModel } from 'src/app/modules/lead/models/contact.model';
import { AccountOrgStructureModel } from 'src/app/modules/account/models/account-org-structure.model';
import { AccountAddressModel } from 'src/app/modules/lead/models/account-address.model';
import { TaskSubjectWithResponse } from 'src/app/models/master-data/subject.model';
import { AccountBusinessStructureModel } from 'src/app/modules/account/models/account-business-structure.model';
import { UserModel } from 'src/app/models/master-data/user.model';

@Component({
    selector: 'app-create-edit-job',
    templateUrl: './create-edit-job.component.html'
})
export class CreateEditJobComponent implements OnInit {
    faEdit = faEdit;
    faTrashAlt = faTrashAlt;
    faPlusCircle = faPlusCircle;
    faTimesCircle = faTimesCircle;
    divShow: boolean;
    gridBoxValue: any;
    gridBoxValue1: any;
    gridBoxValue2: any;
    gridBoxValue3: any;
    gridBoxValue4: any;
    gridBoxValue5: any;
    gridDataSourceClient: any;
    gridDataSourceHr: any;
    gridDataSourceHm: any;
    gridDataSourceJobGrade: any;
    gridDataSourcelocation: any;
    gridDataSource: any;
    gHCCgridDataSource: any;
    gHBCCgridDataSource: any;
    jobEditorForm: FormGroup;
    jobDetailsForm: FormGroup;
    industryDetailsForm: FormGroup;
    otherDetailsForm: FormGroup;
    searchKeywordsForm: FormGroup;
    jobDescriptionForm: FormGroup;
    educationDetailsForm: FormGroup;
    defaultPagination: PaginationModel;
    hrRequesterSearch: DataSearchModel;
    hmRequesterSearch: DataSearchModel;
    jobGradeSearch: DataSearchModel;
    industryGroupSearch: DataSearchModel;
    jobFunctionalSearch: DataSearchModel;
    locationSearch: DataSearchModel;
    bussinessStructureSearch: DataSearchModel;
    industryFilters: DataSearchModel;
    classificationFilter: DataSearchModel;
    industrySubClassificationSearch: DataSearchModel;
    industrySuperClassificationSearch: DataSearchModel;
    functionalAreaSearch: DataSearchModel;
    subFunctionalSearch: DataSearchModel;
    supFunctioanlAreaSearch: DataSearchModel;
    productSearch: DataSearchModel;
    serviceSearch: DataSearchModel;
    toolsAndTechSearch: DataSearchModel;
    targetSearch: DataSearchModel;
    indirecttargetSearch: DataSearchModel;
    emplateMailBody: DataSearchModel;
    getGHCC: DataSearchModel;
    educationGroupSearch: DataSearchModel;
    checked: boolean;
    Years: any;
    valueContent: string;
    editorValueType: string;
    competition: Array<CompetitionModel>;
    hrRequester: Array<ContactModel>;
    hmRequester: Array<ContactModel>;
    jobGrade: Array<AccountOrgStructureModel>;
    industryGroup: Array<AccountIndustryGroupModel>;
    functional: Array<FunctionalGroupModel>;
    locationData: Array<AccountAddressModel>;
    bussinessStructure: Array<AccountBusinessStructureModel>;
    industry: Array<AccountIndustryModel>;
    allIndustryClassification: Array<AccountClassificationModel>;
    subClassification: Array<AccountSubclassificationModel>;
    industrySuper: Array<AccountSuperClassificationModel>;
    functionalArea: Array<FunctionalModel>;
    subFunctional: Array<SubFunctionalModel>;
    superFunctional: Array<SuperFunctionalModel>;
    product: Array<AccountProductModel>;
    service: Array<AccountServiceModel>;
    toolsAndTechnology: Array<AccountToolAndTechModel>;
    targetEmp: Array<EmployeeTargetModel>;
    indirecttarget: Array<UserModel>;
    templateMailBody: Array<TemplateMailBodyModel>;
    eduGroupDataSource: any;
    clientDataSelection: any;
    mspClientData: any;
    hrRequesterData: any;
    hmRequesterData: any;
    jobGradeData: any;
    locationdataSelection: any;
    constructor(
        private _FormBuilder: FormBuilder,
        private _MasterDataService: MasterDataService,
        private _JobService: JobService,
        private _LeadService: LeadService,
        private _AccountService: AccountService
    ) {
        this.divShow = true;
        this.checked = false;
        this.Years = [];
        this.jobDetailsForm = this._FormBuilder.group({
            check: [],
            clientName: [],
            hrRequester: [],
            hmRequester: [],
            checkClient: [],
            mspClient: [],
            primaryAccount: [],
            jobName: [],
            clientJobCode: [],
            staffTitle: ['Yet To Define'],
            jobGrade: [],
            ctcRange: [],
            ctcFrom: [],
            ctcTo: [],
            ctcFromInr: [],
            ctcToInr: [],
            experience: [],
            exp: [],
            noOfOpening: [],
            industryGroup: [null],
            jobFunctionalGroup: [],
            jobType: ['Yet To Define'],
            driveStartDate: [],
            grade: ['Lead Developers'],
            priority: ['Critical'],
            location: [],
            interviewAddress: [null],
            workingDays: ['8 hour'],
            workingHours: ['5 Days'],
            WorkingShift: ['Yet To Define'],
            industrialDesignation: [],
            typeOfAssignment: ['Yet To Define'],
            jobOrder: ['Yet To Define'],
            projectDuration: ['Yet To Define'],
            deliveryAnchor: [],
            bdAnchor: [],
            candidateAge: [],
            candidate: [],
            gender: ['Male'],
            positionType: ['Yet To Define'],
            positionStatus: ['Active'],
            sourcingStatus: ['Open'],
            sourceDifficulty: ['Medium'],
            businessStructure: [],
            positionKeyNotes: []
        });

        this.industryDetailsForm = this._FormBuilder.group({
            industry: [null],
            industryClassification: [null],
            industrySub: [null],
            industrySuper: [],
            functionalArea: [null],
            subFunctionalArea: [''],
            supFunctionalArea: [''],
            product: [],
            services: [],
            toolsTechnologies: [],
            targetEmployer: [null],
            indirectTarget: [],
            clientPrefered: []
        });
        this.otherDetailsForm = this._FormBuilder.group({
            clientSheet: [],
            clientportalId: [],
            mailTemplate: [null],
            recruitmentMail: ['recruitment1@globalhunt.in'],
            purchaseOrder: [],
            entity: [],
            clientCc: [],
            clientBcc: [],
            ghCc: [null],
            ghBcc: [null]
        });
        this.searchKeywordsForm = this._FormBuilder.group({
            skills: [],
            any: [],
            all: [],
            exclude: []
        });
        this.jobDescriptionForm = this._FormBuilder.group({
            descriptionClient: [],
            descriptionCandidate: [],
            descriptionJobPosting: []
        });
        this.educationDetailsForm = this._FormBuilder.group({
            education: [],
            specialization: [],
            yearOfPassing: [],
            percentage: []
        });
        this.competition = Array<CompetitionModel>();
        this.hrRequester = Array<ContactModel>();
        this.hmRequester = Array<ContactModel>();

        this.jobGrade = Array<AccountOrgStructureModel>();
        this.industryGroup = Array<AccountIndustryGroupModel>();
        this.functional = Array<FunctionalGroupModel>();
        this.locationData = Array<AccountAddressModel>();
        this.bussinessStructure = Array<AccountBusinessStructureModel>();
        this.industry = Array<AccountIndustryModel>();
        this.defaultPagination = new PaginationModel();
        this.allIndustryClassification = Array<AccountClassificationModel>();
        this.subClassification = Array<AccountSubclassificationModel>();
        this.industrySuper = Array<AccountSuperClassificationModel>();
        this.functionalArea = Array<FunctionalModel>();
        this.subFunctional = Array<SubFunctionalModel>();
        this.superFunctional = Array<SuperFunctionalModel>();
        this.product = Array<AccountProductModel>();
        this.service = Array<AccountServiceModel>();
        this.toolsAndTechnology = Array<AccountToolAndTechModel>();
        this.targetEmp = Array<EmployeeTargetModel>();
        this.indirecttarget = Array<UserModel>();

        this.hrRequesterSearch = new DataSearchModel;
        this.hrRequesterSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.hmRequesterSearch = new DataSearchModel;
        this.hmRequesterSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.jobGradeSearch = new DataSearchModel;
        this.jobGradeSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.industryGroupSearch = new DataSearchModel;
        this.industryGroupSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.jobFunctionalSearch = new DataSearchModel;
        this.jobFunctionalSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.locationSearch = new DataSearchModel;
        this.locationSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.bussinessStructureSearch = new DataSearchModel;
        this.bussinessStructureSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.industryFilters = new DataSearchModel;
        this.industryFilters.filter.push({
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
        this.industrySubClassificationSearch = new DataSearchModel();
        this.industrySubClassificationSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.industrySuperClassificationSearch = new DataSearchModel();
        this.industrySuperClassificationSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.functionalAreaSearch = new DataSearchModel;
        this.functionalAreaSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.subFunctionalSearch = new DataSearchModel;
        this.subFunctionalSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.supFunctioanlAreaSearch = new DataSearchModel;
        this.supFunctioanlAreaSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.productSearch = new DataSearchModel();
        this.productSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.serviceSearch = new DataSearchModel();
        this.serviceSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.toolsAndTechSearch = new DataSearchModel();
        this.toolsAndTechSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.targetSearch = new DataSearchModel;
        this.targetSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.indirecttargetSearch = new DataSearchModel;
        this.indirecttargetSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.emplateMailBody = new DataSearchModel;
        this.emplateMailBody.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.getGHCC = new DataSearchModel;
        this.getGHCC.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.educationGroupSearch = new DataSearchModel;
        this.educationGroupSearch.filter.push({
            column: 'GroupTitle',
            key: 'contains',
            value: ''
        }
        );
    }
    ngOnInit() {
        this.getClientName();
        this.yearss();
        this.valueChanges();
        this.getJobFunctionalGroup('');


        this.searchFunctioanlArea('');
        this.searchProduct('');
        this.searchServices('');
        this.searchToolsAndTechnlogy('');
        this.searchTargetEmployer('');
        this.getIndirectTarget('');
        this.mailBodyTemplate('');
        this.searchGHCC();
        this.getEducationGroup();

        this.jobDetailsForm.controls.clientName.valueChanges.subscribe(data => {
            if (data !== '' && data !== null) {
                this.getHrRequester(data);
                this.getHmRequester(data);
                this.getJobGrade(data);
                this.getLocation(data);
                this.getBussinessStructure(data);
                this.industryGroupSearch.filter[0] = {
                    column: 'accountid',
                    key: 'equal',
                    value: data[0]
                };
                this.searchIndustryGroup('');
                this.industryFilters.filter[1] = {
                    column: 'accountid',
                    key: 'equal',
                    value: data[0]
                };
                this.searchIndustry('');
                this.classificationFilter.filter[1] = {
                    column: 'accountid',
                    key: 'equal',
                    value: data[0]
                };
                this.searchIndustryClassification('');
            }
            else {
                this.gridDataSourceHr = [];
                this.gridDataSourceHm = [];
                this.gridDataSourceJobGrade = [];
                this.gridDataSourcelocation = [];
                this.industry = [];
                this.industryGroup = [];
                this.allIndustryClassification = [];
                this.jobDetailsForm.controls.hrRequester.reset();
                this.jobDetailsForm.controls.industryGroup.reset();
                this.jobDetailsForm.controls.jobGrade.reset();
                this.jobDetailsForm.controls.location.reset();
                this.industryDetailsForm.controls.industry.reset();
                this.industryDetailsForm.controls.industryClassification.reset();
            }
        });

        this.industryDetailsForm.controls.industryClassification.valueChanges.subscribe(data => {
            if (data) {
                this.searchIndustrySubClassification(data[0].id);
            } else {
                this.subClassification = [];
                this.industryDetailsForm.controls.industrySub.reset();
            }
        });
        this.industryDetailsForm.controls.industrySub.valueChanges.subscribe(data => {
            if (data) {
                this.searchIndustrySuperClassification(data[0].id);
            } else {
                this.industrySuper = [];
                this.industryDetailsForm.controls.industrySuper.reset();
            }
        });
        this.industryDetailsForm.controls.functionalArea.valueChanges.subscribe(data => {
            console.log(data);
            if (data) {
                this.searchSubFunctionalArea(data[0].id);
            }
            else {
                this.subFunctional = [];
                this.industryDetailsForm.controls.subFunctionalArea.reset();
            }
        });
        this.industryDetailsForm.controls.subFunctionalArea.valueChanges.subscribe(data => {
            console.log(data);
            if (data) {
                this.searchSuperFunctionalArea(data[0].id);
            }
            else {
                this.superFunctional = [];
                this.industryDetailsForm.controls.supFunctionalArea.reset();
            }
        });
    }

    addJob() {
        this.locationdataSelection = this.locationdataSelection.map(value => {
            return {
                id: value.id,
                fulladdress: value.fulladdress,
                cityname: value.cityname,
                statename: value.statename
            };
        });
        this.jobDetailsForm.value.location = this.locationdataSelection;
        this.jobDetailsForm.value.clientName = this.clientDataSelection;
        this.jobDetailsForm.value.hrRequester = this.hrRequesterData;
        this.jobDetailsForm.value.hmRequester = this.hmRequesterData;
        this.jobDetailsForm.value.location = this.mspClientData;
        this.jobGradeData = this.jobGradeData.map(value => {
            return {
                id: value.id,
                jobgrade: value.jobgrade,
                ctccurrency: value.ctccurrency,
                expfrom: value.expfrom,
                expto: value.expto

            };
        });
        this.jobDetailsForm.value.jobGrade = this.jobGradeData;

        console.log(JSON.stringify(this.jobDetailsForm.value));
    }
    addCreateEditJob() {

    }
    getClientName() {
        this._AccountService.getCompetition(this.defaultPagination.perPage, this.defaultPagination.next).then(data => {
            this.competition = data.data as any;
            this.gridDataSourceClient = new CustomStore({
                loadMode: 'raw',
                key: 'id',
                cacheRawData: false,
                load: () => {
                    return data.data;
                }
            });
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
    grid_BoxdisplayClientName(item: any) {
        if (item) {
            return item.name
        }
    }
    clientNameSelection(event: any) {
        this.clientDataSelection = event.selectedRowsData[0];
    }
    mspClientSelection(event: any) {
        this.mspClientData = event.selectedRowsData[0];
    }
    // getMspClient(){

    // }
    getHrRequester(id: number) {
        this.hrRequesterSearch.perpage = this.defaultPagination.perPage;
        this.hrRequesterSearch.skip = this.defaultPagination.next;
        this.hrRequesterSearch.orderby = 'id';
        this.hrRequesterSearch.filter[0] = {
            column: 'accountid',
            key: 'equal',
            value: String(id)
        }
        this._LeadService.leadView(this.hrRequesterSearch).then(data => {
            this.hrRequester = data.data;
            this.gridDataSourceHr = new CustomStore({
                loadMode: 'raw',
                key: 'id',
                cacheRawData: false,
                load: () => {
                    return data.data;
                }
            });

        });
    }
    gridBoxHrRequester(item: any) {
        if (item) {
            return item.name;
        }
    }
    hrRequesterSelection(event: any) {
        this.hrRequesterData = event.selectedRowsData[0];
    }
    getHmRequester(id: number) {
        this.hmRequesterSearch.perpage = this.defaultPagination.perPage;
        this.hmRequesterSearch.skip = this.defaultPagination.next;
        this.hmRequesterSearch.orderby = 'id';
        this.hmRequesterSearch.filter[0] = {
            column: 'accountid',
            key: 'equal',
            value: String(id)
        }
        this._LeadService.leadView(this.hmRequesterSearch).then(data => {
            this.hmRequester = data.data;
            this.gridDataSourceHm = new CustomStore({
                loadMode: 'raw',
                key: 'id',
                cacheRawData: false,
                load: () => {
                    return data.data;
                }
            });

        });
    }
    gridBoxHmRequester(item: any) {
        if (item) {
            return item.name;
        }
    }
    hmRequesterSelection(event: any) {
        this.hmRequesterData = event.selectedRowsData[0];
    }
    getJobGrade(id: number) {
        this.jobGradeSearch.perpage = this.defaultPagination.perPage;
        this.jobGradeSearch.skip = this.defaultPagination.next;
        this.jobGradeSearch.orderby = 'id';
        this.jobGradeSearch.filter[0] = {
            column: 'accountid',
            key: 'equal',
            value: String(id)
        }
        this._AccountService.searchAccountOrgStructure(this.jobGradeSearch).then(data => {
            this.jobGrade = data.data;
            this.gridDataSourceJobGrade = new CustomStore({
                loadMode: 'raw',
                key: 'id',
                cacheRawData: false,
                load: () => {
                    return data.data;
                }
            });
        });
    }
    gridBoxJobGrade(item: any) {
        if (item) {
            return item.jobgrade;
        }
    }
    jobGradeSelection(event: any) {
        this.jobGradeData = event.selectedRowsData;
    }
    searchIndustryGroup(event: any) {
        this.industryGroupSearch.perpage = this.defaultPagination.perPage;
        this.industryGroupSearch.skip = this.defaultPagination.next;
        this.industryGroupSearch.orderby = 'id';
        this.industryGroupSearch.filter[1] = {
            column: 'industrygroupname',
            key: 'contains',
            value: event
        };
        this._AccountService.searchAccountIndustryGroup(this.industryGroupSearch).then(data => {
            this.industryGroup = data.data;
            console.log(this.industryGroup);
        });
    }
    getJobFunctionalGroup(event: string) {
        this.jobFunctionalSearch.perpage = this.defaultPagination.perPage;
        this.jobFunctionalSearch.skip = this.defaultPagination.next;
        this.jobFunctionalSearch.orderby = 'id';
        this.jobFunctionalSearch.filter[1] = {
            column: 'name',
            key: 'contains',
            value: event
        };
        this._MasterDataService.searchFunctionalGroup(this.jobFunctionalSearch).then(data => {
            this.functional = data.data;
            console.log(this.functional);
        });
    }
    getLocation(id: number) {
        this.locationSearch.perpage = this.defaultPagination.perPage;
        this.locationSearch.skip = this.defaultPagination.next;
        this.locationSearch.orderby = 'id';
        this.locationSearch.filter[0] = {
            column: 'accountid',
            key: 'equal',
            value: String(id)
        }
        this._AccountService.searchAccountAddress(this.locationSearch).then(data => {
            this.locationData = data.data;
            console.log(this.locationData);
            this.gridDataSourcelocation = new CustomStore({
                loadMode: 'raw',
                key: 'id',
                cacheRawData: false,
                load: () => {
                    return data.data;
                }
            });
        });
    }
    gridBoxDisplaylocation(item: any) {
        if (item) {
            return item.cityname;
        }
    }
    locationSelection(event: any) {
        this.locationdataSelection = event.selectedRowsData;
    }
    getBussinessStructure(id: number) {
        this.bussinessStructureSearch.perpage = this.defaultPagination.perPage;
        this.bussinessStructureSearch.skip = this.defaultPagination.next;
        this.bussinessStructureSearch.orderby = 'id';
        this.bussinessStructureSearch.filter[0] = {
            column: 'accountid',
            key: 'equal',
            value: String(id)
        };
        this._AccountService.searchAccountBusinessStructure(this.bussinessStructureSearch).then(data => {
            this.bussinessStructure = data.data;
        });
    }
    searchIndustry(event: string) {
        this.industryFilters.perpage = this.defaultPagination.perPage;
        this.industryFilters.skip = this.defaultPagination.next;
        this.industryFilters.orderby = 'id'
        this.industryFilters.filter[1] = {
            column: 'industryname',
            key: 'contains',
            value: event
        };
        this._AccountService.searchAccountIndustry(this.industryFilters).then(industry => {
            this.industry = industry.data;
            console.log(this.industry)
        });
    }
    searchIndustryClassification(event: string) {
        this.classificationFilter.perpage = this.defaultPagination.perPage;
        this.classificationFilter.skip = this.defaultPagination.next;
        this.classificationFilter.orderby = 'id';
        this.classificationFilter.filter[1] = {
            column: 'classificationname',
            key: 'contains',
            value: event
        };
        this._AccountService.searchAccountClassification(this.classificationFilter).then(classification => {
            this.allIndustryClassification = classification.data;
        });
    }
    searchIndustrySubClassification(id: number) {
        this.industrySubClassificationSearch.perpage = this.defaultPagination.perPage;
        this.industrySubClassificationSearch.skip = this.defaultPagination.next;
        this.industrySubClassificationSearch.orderby = 'id';
        this.industrySubClassificationSearch.filter[0] = {
            column: 'subclassificationid',
            key: 'equal',
            value: String(id)
        };
        this._AccountService.searchAccountSubClassification(this.industrySubClassificationSearch).then(data => {
            this.subClassification = data.data;
        });
    }
    searchIndustrySuperClassification(id: number) {
        this.industrySuperClassificationSearch.perpage = this.defaultPagination.perPage;
        this.industrySuperClassificationSearch.skip = this.defaultPagination.next;
        this.industrySuperClassificationSearch.orderby = 'id';
        this.industrySuperClassificationSearch.filter[0] = {
            column: 'superclassificationid',
            key: 'equal',
            value: String(id)
        };
        this._AccountService.searchSuperClassification(this.industrySuperClassificationSearch).then(data => {
            this.industrySuper = data.data;
        });
    }
    searchFunctioanlArea(event: string) {
        this.functionalAreaSearch.perpage = this.defaultPagination.perPage;
        this.functionalAreaSearch.skip = this.defaultPagination.next;
        this.functionalAreaSearch.orderby = 'id';
        this.functionalAreaSearch.filter[1] = {
            column: 'name',
            key: 'contains',
            value: event
        }
        this._MasterDataService.searchFunctional(this.functionalAreaSearch).then(data => {
            this.functionalArea = data.data;
        });
    }
    searchSubFunctionalArea(id: number) {
        this.subFunctionalSearch.perpage = this.defaultPagination.perPage;
        this.subFunctionalSearch.skip = this.defaultPagination.next;
        this.subFunctionalSearch.orderby = 'functionalid';
        this.subFunctionalSearch.filter[1] = {
            column: 'functionalid',
            key: 'equal',
            value: String(id)
        }
        this._MasterDataService.searchSubFunctional(this.subFunctionalSearch).then(data => {
            this.subFunctional = data.data;
        });
    }
    searchSuperFunctionalArea(id: number) {
        this.supFunctioanlAreaSearch.perpage = this.defaultPagination.perPage;
        this.supFunctioanlAreaSearch.skip = this.defaultPagination.next;
        this.supFunctioanlAreaSearch.orderby = 'subfunctionalid';
        this.supFunctioanlAreaSearch.filter[1] = {
            column: 'subfunctionalid',
            key: 'equal',
            value: String(id)
        }
        this._MasterDataService.searchSuperFunctional(this.supFunctioanlAreaSearch).then(data => {
            this.superFunctional = data.data;
        });
    }
    searchProduct(event: string) {
        this.productSearch.perpage = this.defaultPagination.perPage;
        this.productSearch.skip = this.defaultPagination.next;
        this.productSearch.orderby = 'id';
        this.productSearch.filter[1] = {
            column: 'productname',
            key: 'contains',
            value: event
        }
        this._AccountService.searchAccountProduct(this.productSearch).then(data => {
            this.product = data.data;
        });
    }
    searchServices(event: string) {
        this.serviceSearch.perpage = this.defaultPagination.perPage;
        this.serviceSearch.skip = this.defaultPagination.next;
        this.serviceSearch.orderby = 'id';
        this.serviceSearch.filter[1] = {
            column: 'servicename',
            key: 'contains',
            value: event
        }
        this._AccountService.searchAccountService(this.serviceSearch).then(data => {
            this.service = data.data;
        });
    }
    searchToolsAndTechnlogy(event: string) {
        this.toolsAndTechSearch.perpage = this.defaultPagination.perPage;
        this.toolsAndTechSearch.skip = this.defaultPagination.next;
        this.toolsAndTechSearch.orderby = 'id';
        this.toolsAndTechSearch.filter[1] = {
            column: 'tooltechname',
            key: 'contains',
            value: event
        }
        this._AccountService.searchToolAndTech(this.toolsAndTechSearch).then(data => {
            this.toolsAndTechnology = data.data;
            console.log(this.toolsAndTechnology)
        });
    }
    searchTargetEmployer(event: string) {
        this.targetSearch.perpage = this.defaultPagination.perPage;
        this.targetSearch.skip = this.defaultPagination.next;
        this.targetSearch.orderby = 'id';
        this.targetSearch.filter[1] = {
            column: 'name',
            key: 'contains',
            value: event
        }
        this._MasterDataService.searchAccountEmployeeTarget(this.targetSearch).then(data => {
            this.targetEmp = data.data;
        });
    }
    getIndirectTarget(event: string) {
        this.indirecttargetSearch.perpage = this.defaultPagination.perPage;
        this.indirecttargetSearch.skip = this.defaultPagination.next;
        this.indirecttargetSearch.orderby = 'id';
        this.indirecttargetSearch.filter[0] = {
            column: 'username',
            key: 'contains',
            value: event
        };
        this._MasterDataService.getUser(this.indirecttargetSearch).then(data => {
            this.indirecttarget = data.data;
        });
    }
    mailBodyTemplate(event: string) {
        this.emplateMailBody.perpage = this.defaultPagination.perPage;
        this.emplateMailBody.skip = this.defaultPagination.next;
        this.emplateMailBody.orderby = 'id';
        this.emplateMailBody.filter[1] = {
            column: 'templatetype',
            key: 'contains',
            value: event
        }
        this._JobService.searchTemplateMailBody(this.emplateMailBody).then(data => {
            this.templateMailBody = data.data;
        });
    }
    valueChanges() {
        this.industryDetailsForm.controls.industryClassification.valueChanges.subscribe(() => {
            this.industryDetailsForm.patchValue({
                industrySub: null,
                industrySuper: null
            });
        });
        this.industryDetailsForm.controls.functionalArea.valueChanges.subscribe(() => {
            this.industryDetailsForm.patchValue({
                subFunctionalArea: null,
                supFunctionalArea: null
            });
        });
    }


    editor() {
        console.log(this.jobDescriptionForm.controls)
    }
    hideshow() {
        this.checked = !this.checked;
        this.jobDetailsForm.controls.mspClient.reset();
        this.jobDetailsForm.controls.checkClient.reset();
    }
    yearss() {
        for (let years = 1971; years <= 2020; years++) {
            this.Years.push({ years });
        }
    }

    gHCCgridBox_displayExpr(item: any) {
        if (item) {
            return item.username
        }
    }
    gHBCCgridBox_displayExpr(item: any) {
        if (item) {
            return item.username
        }
    }
    searchGHCC() {
        this.getGHCC.perpage = this.defaultPagination.perPage;
        this.getGHCC.skip = this.defaultPagination.next;
        this.getGHCC.orderby = 'id';
        this._MasterDataService.searchUserDetail(this.getGHCC).then(value => {
            this.gHCCgridDataSource = new CustomStore({
                loadMode: 'raw',
                key: 'id',
                cacheRawData: false,
                load: () => {
                    return (value as any).data;
                }
            });
            this.gHBCCgridDataSource = new CustomStore({
                loadMode: 'raw',
                key: 'id',
                cacheRawData: false,
                load: () => {
                    return (value as any).data;
                }
            });
        });
    }
    getEducationGroup() {
        this.educationGroupSearch.perpage = this.defaultPagination.perPage;
        this.educationGroupSearch.skip = this.defaultPagination.next;
        this.educationGroupSearch.orderby = 'GroupTitle';
        console.log(this.educationGroupSearch);
        this._MasterDataService.searchEducationGroup(this.educationGroupSearch).then(data => {
            console.log(data);
            this.eduGroupDataSource = new CustomStore({
                loadMode: 'raw',
                key: 'id',
                cacheRawData: false,
                load: () => {
                    return (data as any).data;
                }
            });
            console.log(this.eduGroupDataSource);
        });
    }
    eduGroupdBox_displayExpr(item: any) {
        if (item) {
            return item.educationGroupDescription
        }

    }
    specializationType() {

    }
}



