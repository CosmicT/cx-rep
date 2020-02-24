import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CognitoSessionService } from 'src/app/services/cognitoSession.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    constructor(
        private _ActivatedRoute: ActivatedRoute,
        private _CognitoSessionService: CognitoSessionService
    ) { }
    ngOnInit() {
        // this is temporary code
        this._ActivatedRoute.data.subscribe(data => {
            // this._CognitoSessionService.getCongitoUserSession().subscribe(valu => {
            //     console.log(valu);
            // });
        });
    }
}