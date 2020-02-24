import { Component } from '@angular/core';
import { faTachometerAlt, faStreetView, faUsers, faClock, faUserCircle, faSearch, faHandshake, faFileAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html'
})
export class SideMenuComponent {
    faTachometerAlt = faTachometerAlt;
    faStreetView = faStreetView;
    faUsers = faUsers;
    faClock = faClock;
    faUserCircle = faUserCircle;
    faHandshake = faHandshake;
    faSearch = faSearch;
    faFileAlt = faFileAlt;
    constructor() {

    }
}