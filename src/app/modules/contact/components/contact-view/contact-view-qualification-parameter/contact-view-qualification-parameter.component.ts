import { Component, OnInit, Input } from '@angular/core';
import { DataSearchModel } from 'src/app/models/data-search.model';
import { PaginationModel } from 'src/app/models/pagination.model';
import { AccountService } from 'src/app/modules/account/services/account.service';
import { AccountContactQualificationModel } from '../../../models/account-contact-qualification.model';
import CustomStore from 'devextreme/data/custom_store';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateParameterScaleComponent } from './create-parameter-scale/create-parameter-scale.component';

@Component({
    selector: 'app-contact-view-qualification',
    templateUrl: './contact-view-qualification-parameter.component.html'
})
export class ContactViewQualificationParameterComponent implements OnInit {
    @Input() contactId: string;
    defaultPagination: PaginationModel;
    qualificationParamterSearch: DataSearchModel;
    qualificationParamter: Array<AccountContactQualificationModel>;
    qualificationParameterDataSource: any;

    constructor(
        private _AccountService: AccountService,
        private _NgbModal: NgbModal
    ) {
        this.defaultPagination = new PaginationModel();
        this.qualificationParamter = Array<AccountContactQualificationModel>();
        this.qualificationParamterSearch = new DataSearchModel();
        this.qualificationParamterSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
        this.contactId = '';
    }
    ngOnInit() {
        this.qualificationParameterDataGrid();
    }
    qualificationParameterDataGrid() {
        this.qualificationParamterSearch.perpage = this.defaultPagination.perPage;
        this.qualificationParamterSearch.skip = this.defaultPagination.next;
        this.qualificationParamterSearch.orderby = 'id';
        this.qualificationParamterSearch.filter.push({
            column: 'parenttype',
            key: 'equal',
            value: 'contact'
        });
        this._AccountService.searchAccountContactQualification(this.qualificationParamterSearch).then(data => {
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
    openCreateParameterScaleDialog() {
        const modalRef = this._NgbModal.open(CreateParameterScaleComponent, {
            ariaLabelledBy: `Parameter Scale`,
            centered: true,
            size: 'lg',
            backdrop: 'static'
        });
        modalRef.componentInstance.contactId = this.contactId;
    }
}