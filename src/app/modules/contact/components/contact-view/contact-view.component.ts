import { Component, OnInit } from '@angular/core';
import { faBriefcase, faPhoneSquareAlt, faMapMarkerAlt, faClock, faListAlt, faUsers, faPenSquare, faTimes, faRetweet, faList, faEnvelope, faPhoneAlt, faTimesCircle, faGlobeAsia } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { ContactModel } from 'src/app/modules/lead/models/contact.model';
import { AccountModel } from 'src/app/modules/account/models/account.model';
import { CompetitionModel } from 'src/app/modules/account/models/competition.model';
@Component({
    selector: 'app-contact-view',
    templateUrl: './contact-view.component.html'
})
export class ContactViewComponent implements OnInit {
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
    faPhoneSquareAlt = faPhoneSquareAlt;
    faMapMarkerAlt = faMapMarkerAlt;
    faGlobeAsia = faGlobeAsia;
    divShow: boolean;
    contact: Array<ContactModel>;
    accountAddress: CompetitionModel;
    constructor(
        private _ActivatedRoute: ActivatedRoute
    ) {
        this.contact = Array<ContactModel>();
        this.accountAddress = new CompetitionModel();
    }
    ngOnInit() {
        this._ActivatedRoute.data.subscribe(data => {
            console.log(data);
            this.contact = data.contact[0];
            this.accountAddress = data.contact[1];
        });
    }
}