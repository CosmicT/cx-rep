import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class GuardService {
    constructor(
        private _Router: Router
    ) { }
    async hasAccess(): Promise<boolean> {
        const token = await Auth.currentSession()
            .then(data => {
                return data.getAccessToken().getJwtToken();
            })
            .catch(err => {
                if (err === 'No current user') {
                    this._Router.navigate(['/login']);
                    return Promise.resolve(false);
                }
            });
        if (token) {
            return Promise.resolve(true);
        } else {
            return Promise.resolve(false);
        }
    }
    async logout() {
        await Auth.signOut({ global: true })
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }
}