import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CognitoUserSession } from 'amazon-cognito-identity-js';
import { Auth } from 'aws-amplify';

@Injectable()
export class DashboardResolver implements Resolve<void | CognitoUserSession> {
    constructor(
        private _Router: Router
    ) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<void | CognitoUserSession> {
        return Auth.currentSession()
            .then(data => data)
            .catch(err => {
                if (err === 'No current user') {
                    this._Router.navigate(['/login']);
                }
            });
    }
}