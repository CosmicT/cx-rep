import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { GuardService } from '../services/guards.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private _Router: Router,
        private _GuardService: GuardService
    ) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this._GuardService.hasAccess()
            .then(data => {
                if (data === false) {
                    this._GuardService.logout();
                    this._Router.navigate(['/login']);
                    return false;
                } else {
                    return true;
                }
            });
    }
}