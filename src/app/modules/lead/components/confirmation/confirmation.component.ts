import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LeadService } from '../../services/lead.service';
import { NotifierService } from 'src/app/services/notifier.service';
import { faTimesCircle, faCheck, faSpinner } from '@fortawesome/free-solid-svg-icons';
import CustomStore from 'devextreme/data/custom_store';
import { AccountService } from 'src/app/modules/account/services/account.service';
import { PaginationModel } from 'src/app/models/pagination.model';
@Component({
    selector: 'app-confirmation',
    templateUrl: './confirmation.component.html'
})
export class ConfirmationComponent implements OnInit {
    @Input() confirmationType: string;
    @Input() contactId: string;
    @Input() previousAccount: { id: string, name: string };
    isQuitLead: boolean;
    faTimesCircle = faTimesCircle;
    faSpinner = faSpinner;
    faCheck = faCheck;
    gridDataSource: any;
    gridBoxValue: number[];
    defaultPagination: PaginationModel;
    newAccountId: string;
    newAccountname: string;
    quitLeadSubmitted: boolean;
    quitLeadSubmitting: boolean;
    constructor(
        private _NgbActiveModal: NgbActiveModal,
        private _LeadService: LeadService,
        private _NotifierService: NotifierService,
        private _AccountService: AccountService
    ) {
        this.confirmationType = '';
        this.contactId = '';
        this.isQuitLead = false;
        this.defaultPagination = new PaginationModel();
        this.previousAccount = { id: '', name: '' };
        this.quitLeadSubmitted = false;
        this.quitLeadSubmitting = false;
        this.newAccountId = '';
        this.newAccountname = '';

    }
    ngOnInit() {
        this.confirmationType === 'convert' ? this.isQuitLead = false : this.isQuitLead = true;
        this.confirmationType === 'convert' ? this.isQuitLead = false : this.getAccountDetail();
    }
    closeActiveTab() {
        this._NgbActiveModal.close();
    }
    getAccountDetail() {
        this._AccountService.getCompetition(this.defaultPagination.perPage, this.defaultPagination.next)
            .then(data => {
                this.gridDataSource = new CustomStore({
                    loadMode: 'raw',
                    key: 'id',
                    cacheRawData: false,
                    load: () => {
                        return (data as any).data;
                    }
                });
            });
    }
    gridBox_displayExpr(item: any) {
        if (item.name) {
            this.newAccountname = item.name;
            return item && item.name;
        }
    }
    confirmation() {
        if (this.confirmationType === 'convert') {
            this._LeadService.convertLead(this.contactId, {
                modifiedusername: 'Rajesh',
                modifiedby: 'Rajesh'
            })
                .then(data => {
                    if (data.success === true) {
                        this._NotifierService.showSuccess('Lead converted successfully');
                        this.closeActiveTab();
                    } else {
                        this._NotifierService.showError('Lead not converted');
                    }
                });
        } else {
            this.quitLeadSubmitted = true;
            if (this.newAccountId !== undefined && this.newAccountId !== null) {
                this.quitLeadSubmitted = false;
                this.quitLeadSubmitting = true;
                this._LeadService.quitLead(this.contactId, {
                    existingaccount: this.previousAccount,
                    account: { id: this.newAccountId, name: this.newAccountname },
                    modifiedusername: 'Rajesh',
                    modifiedby: 'Rajesh'
                })
                    .then(data => {
                        if (data.success === true) {
                            this._NotifierService.showSuccess('Lead quit successfully');
                            this.closeActiveTab();
                        } else {
                            this._NotifierService.showError('Lead not quit');
                        }
                    });
            }
        }
    }
}