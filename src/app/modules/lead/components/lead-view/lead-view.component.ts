import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faBriefcase, faPhoneSquareAlt, faMapMarkerAlt, faClock, faListAlt, faUsers, faPenSquare, faTimes, faRetweet, faList, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { AccountService } from 'src/app/modules/account/services/account.service';
import { PaginationModel } from 'src/app/models/pagination.model';
import { ContactModel } from '../../models/contact.model';
import { CompetitionModel } from 'src/app/modules/account/models/competition.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { TeamMemberModel } from 'src/app/models/master-data/team-member.model';
@Component({
    selector: 'app-lead-view',
    templateUrl: './lead-view.component.html'
})
export class LeadViewComponent implements OnInit {
    divShow: boolean;
    faMapMarkerAlt = faMapMarkerAlt;
    faPhoneSquareAlt = faPhoneSquareAlt;
    faBriefcase = faBriefcase;
    faTimesCircle = faTimesCircle;
    faClock = faClock;
    faListAlt = faListAlt;
    faEnvelope = faEnvelope;
    faUsers = faUsers;
    faPenSquare = faPenSquare;
    faTimes = faTimes;
    faList = faList;
    faRetweet = faRetweet;
    faPhoneAlt = faPhoneAlt;
    collapsed: boolean;
    defaultPagination: PaginationModel;
    accountId: string;
    accountSearch: string;
    contact: ContactModel;
    competition: CompetitionModel;
    leadId: string;
    closeResult: string;
    teamMembersDataSource: any;
    teamMembers: Array<TeamMemberModel>;
    fulladd: string;
    constructor(
        private _ActivatedRoute: ActivatedRoute,
        private _AccountService: AccountService,
        private _NgbModal: NgbModal,
    ) {
        this.divShow = true;
        this.collapsed = false;
        this.defaultPagination = new PaginationModel();
        this.accountId = '';
        this.accountSearch = '';
        this.contact = new ContactModel();
        this.leadId = '';
        this.closeResult = '';
        this.teamMembers = Array<TeamMemberModel>();
    }
    ngOnInit() {
        this.leadId = this._ActivatedRoute.snapshot.params.id;
        this._ActivatedRoute.data.subscribe(data => {
            console.log(data);
            if(data)
            if (data.lead.data[0].accountid) {
                this.accountId = data.lead.data[0].accountid;
                this.contact = {
                    ...this.contact, ...data.lead.data[0], ...{
                        industry: data.lead.data[0].industry ? data.lead.data[0].industry.map(indu => indu.industry).join(' ,') : null,
                        industrygroup: data.lead.data[0].industrygroup ? data.lead.data[0].industrygroup.map(indu => indu.industry_group).join(' ,') : null
                    }
                } as any;
            }
        }),
            (() => {
                if (this.accountId !== '') {
                    this._AccountService.getCompetition(this.defaultPagination.perPage, this.defaultPagination.next, this.accountSearch, this.accountId)
                        .then(data => {
                            if (data.data) {
                                this.competition = data.data[0];
                                this.fulladd=this.competition.fulladdress;
                            }
                        });
                }
            })();
    }
    openConfimationDialog(confirmationType: string) {
        const sizeOption = confirmationType === 'convert' ? 'sm' : 'lg';
        const modalRef = this._NgbModal.open(ConfirmationComponent, {
            ariaLabelledBy: `Confimation`,
            centered: true,
            size: sizeOption,
            backdrop: 'static',
            windowClass: 'lead-editpopup'

        });
        modalRef.componentInstance.confirmationType = confirmationType;
        modalRef.componentInstance.contactId = this.leadId;
        modalRef.componentInstance.previousAccount = this.contact.account;
    }

}