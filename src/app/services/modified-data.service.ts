import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { UserRoleDetailsModel } from '../modules/lead/models/user-role.model';

@Injectable({
    providedIn: 'root'
})
export class ModifiedDataService {
    createdUserInfo: UserRoleDetailsModel;
    modifiedUserInfo: UserRoleDetailsModel;
    constructor(
        private _AuthService: AuthService
    ) {
        this.createdUserInfo = new UserRoleDetailsModel();
        this.modifiedUserInfo = new UserRoleDetailsModel();
    }

    getModifiedValueWithCreatedBy(formValue: any) {
        return Promise.resolve(this._AuthService.getUserInfo().then(data => {
            this.createdUserInfo = data;
            return {
                ...formValue, ...{
                    createdBy: this.createdUserInfo.id,
                    creartedusername: this.createdUserInfo.username
                }
            };
        }));
    }
    getModifiedValueWithModifiedBy(formValue: any) {
        return Promise.resolve(this._AuthService.getUserInfo().then(data => {
            this.modifiedUserInfo = data;
            return {
                ...formValue, ...{
                    modifiedBy: this.modifiedUserInfo.id,
                    modifiedusername: this.modifiedUserInfo.username
                }
            };
        }));
    }
}