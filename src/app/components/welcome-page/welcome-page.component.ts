import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { Auth } from 'aws-amplify';
import { CognitoSessionService } from 'src/app/services/cognitoSession.service';
import { CognitoUserSession } from 'amazon-cognito-identity-js';


@Component({
    selector: 'app-welcome-page',
    templateUrl: './welcome-page.component.html'
})
export class WelcomePageComponent implements OnInit {
    timeLeft: number;
    cognitoUserSession: CognitoUserSession;
    constructor(
        private _Router: Router,
        private _CognitoSessionService: CognitoSessionService
    ) {
        this.timeLeft = 10;
    }
    ngOnInit() {
        timer(1000, 1000)
            .subscribe(time => {
                if (this.timeLeft <= 0) {
                    this.timeLeft = 0;
                } else {
                    this.timeLeft = this.timeLeft - time;
                }
            });
        setTimeout(async () => {
            await Auth.currentSession()
                .then(data => {
                    if (data) {
                        this._CognitoSessionService.setCognitoUserSession(data);
                        this._CognitoSessionService.setCognitoUserSessionAccessToken(data.getAccessToken().getJwtToken());
                        this._Router.navigate(['/dashboard']);
                    }
                });
        }, 5000);
    }
}