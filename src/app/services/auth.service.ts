import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { UserRoleDetailsModelWithResponse } from '../modules/lead/models/user-role.model';
import { Auth } from 'aws-amplify';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        private _ApiService: ApiService
    ) { }
    getRoleUserDetails(emailValue: string): Promise<UserRoleDetailsModelWithResponse> {
        return this._ApiService.postRequest<UserRoleDetailsModelWithResponse>(`admin/user-details`, { email: emailValue });
    }
    async getUserInfo() {
        const email = await Auth.currentAuthenticatedUser()
            .then(data => data.attributes.email)
            .catch(err => console.log(err));
        return Promise.resolve(this.getRoleUserDetails(email)
            .then(data => data.data));
    }
}