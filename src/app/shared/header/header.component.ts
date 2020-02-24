import { Component, ElementRef } from '@angular/core';
import { faBriefcase, faClock, faEnvelope, faList, faInbox, faPlus, faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    faInbox = faInbox;
    faBriefcase = faBriefcase;
    faClock = faClock;
    faEnvelope = faEnvelope;
    faList = faList;
    faPlus = faPlus;
    faAngleDown = faAngleDown;
    faSearch = faSearch;
    userEmail: string;
    constructor(
        private _ElementRef: ElementRef,
        private _Router: Router,
        private _SessionService: SessionService
    ) {
        this.userEmailFromToken();
    }
    async userEmailFromToken() {
        await Auth.currentSession()
            .then(data => {
                this.userEmail = data.getIdToken().decodePayload().email.split('@')[0];
            });
    }
    inputFocus() {
        this._ElementRef.nativeElement.querySelector('#searchfield').focus();
    }
    signOut() {
        Auth.signOut({ global: true })
            .then(data => {
                console.log(data);
                this._SessionService.removeSessions('isAuthenticated');
                this._Router.navigate(['/login']);
            })
            .catch(err => console.log(err));
    }
}