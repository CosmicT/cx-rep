import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataSearchModel } from 'src/app/models/data-search.model';
import { PaginationModel } from 'src/app/models/pagination.model';
import { MasterDataService } from 'src/app/services/master-data/master-data.service';
import { QualificationParameterModel, QualificationScaleModel } from 'src/app/models/master-data/qualification.model';
import CustomStore from 'devextreme/data/custom_store';
import { AccountQualificationHistoryAndQualificationParameterModel } from 'src/app/modules/account/models/account-qualification.model';
import { AccountService } from 'src/app/modules/account/services/account.service';
import { NotifierService } from 'src/app/services/notifier.service';

@Component({
    selector: 'app-create-parameter-scale',
    templateUrl: './create-parameter-scale.component.html'
})
export class CreateParameterScaleComponent implements OnInit {
    @Input() contactId: string;
    defaultPagination: PaginationModel;
    qualificationParamterForm: FormGroup;
    qualificationParamterSearch: DataSearchModel;
    qualificationSubParamter: Array<QualificationParameterModel>;
    gridDataSourcePara: any;
    scaleSearch: DataSearchModel;
    scaleData: Array<QualificationScaleModel>;
    gridDataSource: any;
    gridBoxValuePara: any;
    gridBoxValue: any;
    qualificationParameterValue: AccountQualificationHistoryAndQualificationParameterModel;
    constructor(
        private _NgbActiveModal: NgbActiveModal,
        private _FormBuilder: FormBuilder,
        private _MasterDataService: MasterDataService,
        private _AccountService: AccountService,
        private _NotifierService: NotifierService) {
        this.defaultPagination = new PaginationModel;
        this.contactId = '';
        this.qualificationParamterForm = this._FormBuilder.group({
            parameter: [],
            scale: []
        });
        this.qualificationSubParamter = Array<QualificationParameterModel>();
        this.qualificationParamterSearch = new DataSearchModel;
        this.qualificationParamterSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.scaleData = Array<QualificationScaleModel>();
        this.scaleSearch = new DataSearchModel;
        this.scaleSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });

    }
    ngOnInit() {
        this.getQualificationParameter();
        this.qualificationParamterForm.controls.parameter.valueChanges.subscribe(data => {
            if (data !== '' && data !== null) {
                this.getQualificationScale(data);
            } else {
                this.gridDataSource = [];
                this.qualificationParamterForm.controls.scale.reset();
            }
        });
    }
    getQualificationParameter() {
        this.qualificationParamterSearch.perpage = this.defaultPagination.perPage;
        this.qualificationParamterSearch.skip = this.defaultPagination.next;
        this.qualificationParamterSearch.orderby = 'id';
        this.qualificationParamterSearch.filter.push({
            column: 'parent_type',
            key: 'equal',
            value: '0'
        });
        this._MasterDataService.getQualificationParameter(this.qualificationParamterSearch)
            .then(data => {
                this.qualificationSubParamter = data.data;
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
        this._MasterDataService.getQualificationScale(this.scaleSearch)
            .then(data => {
                this.scaleData = data.data;
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
                parenttype: 'contact',
                createdby: 'shubham',
                createdusername: 'shubham',
                parameterid: this.qualificationParamterForm.controls.parameter.value[0],
                parameterscaleid: this.qualificationParamterForm.controls.scale.value[0],
                parentid: this.contactId
            }
        };
        this._AccountService.createAccountQualificationHistoryAndQualificationParameter(this.qualificationParameterValue).then(data => {
            if (data.success === true) {
                this._NotifierService.showSuccess('Added Successfully!');
                this.closeActiveTab();
            }
            else {
                this._NotifierService.showError('No data are added!')
            }
        });
    }

    closeActiveTab() {
        return this._NgbActiveModal.close();
    }
}