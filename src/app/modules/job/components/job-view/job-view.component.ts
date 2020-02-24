import { Component, OnInit } from '@angular/core';
import {
    faBriefcase, faPhoneSquareAlt, faMapMarkerAlt, faClock, faListAlt, faUsers, faPenSquare, faTimes, faRetweet, faList, faEnvelope, faPhoneAlt, faStickyNote,
    faObjectUngroup, faStreetView, faBarcode, faPlusSquare, faSortAlphaDown, faSortAmountDown, faSortAmountDownAlt, faChartArea, faGlobe, faFileExport, faColumns
} from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
    selector: 'app-job-view',
    templateUrl: './job-view.component.html'
})
export class JobViewComponent implements OnInit {
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
    faStickyNote = faStickyNote;
    faBadge = faObjectUngroup;
    faStreetView = faStreetView;
    faBarcode = faBarcode;
    faPlusSquare = faPlusSquare;
    faSortAlphaDown = faSortAlphaDown;
    faSortAmountDown = faSortAmountDown;
    faSortAmountDownAlt = faSortAmountDownAlt;
    faChartArea = faChartArea;
    faGlobe = faGlobe;
    faFileExport = faFileExport;
    faColumns = faColumns;
    gridBoxValue2: any;
    gridBoxValue1: any;
    constructor() {
        this.divShow = true;
    }
    ngOnInit() {

    }

}