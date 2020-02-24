import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateQualificationParamterComponent } from './create-qualification-parameter/create-qualification-parameter.component';
import { AccountService } from 'src/app/modules/account/services/account.service';
import { AccountContactQualificationModel } from 'src/app/modules/contact/models/account-contact-qualification.model';
import { DataSearchModel } from 'src/app/models/data-search.model';
import { PaginationModel } from 'src/app/models/pagination.model';
import CustomStore from 'devextreme/data/custom_store';

@Component({
    selector: 'app-lead-view-qualification-parameter',
    templateUrl: './lead-view-qualification-parameter.component.html'
})
export class LeadViewQualificationParameterComponent implements OnInit {
    @Input() leadId: string;
    commonSearch: DataSearchModel;
    qualificationParameterDataSource: any;
    qualificationParamter: Array<AccountContactQualificationModel>;
    defaultPagination: PaginationModel;
    constructor(
        private _NgbModal: NgbModal,
        private _AccountService: AccountService
    ) {
        this.leadId = '';
        this.defaultPagination = new PaginationModel();
        this.qualificationParamter = Array<AccountContactQualificationModel>();
        this.commonSearch = new DataSearchModel();
        this.commonSearch.filter.push({
            column: 'deleted',
            key: 'equal',
            value: '0'
        });
    }
    ngOnInit() {
        this.qualificationParameterDataGrid();
    }

    qualificationParameterDataGrid() {
        this.commonSearch.perpage = this.defaultPagination.perPage;
        this.commonSearch.skip = this.defaultPagination.next;
        this.commonSearch.orderby = 'id';
        this.commonSearch.filter.push({
            column: 'parenttype',
            key: 'equal',
            value: 'leads'
        });
        this._AccountService.searchAccountContactQualification(this.commonSearch)
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
    openCreateQualification() {
        const modalRef = this._NgbModal.open(CreateQualificationParamterComponent, {
            ariaLabelledBy: 'Qualification Parameter',
            centered: true,
            backdrop: 'static',
            size: 'lg'
        });
        modalRef.componentInstance.leadId = this.leadId;
    }
}