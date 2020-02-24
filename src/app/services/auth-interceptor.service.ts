import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Auth } from 'aws-amplify';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return from(this.handleAccessToken(req, next));
    }

    private async handleAccessToken(req: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>> {
        const token = await Auth.currentSession()
            .then(data => {
                if (data) {
                    return data.getAccessToken().getJwtToken();
                }
            });
        if (token !== 'undefined' && token !== null && token !== '') {
            const headers = req.headers.set('Authorization', `Bearer ${token}`);
            const authReq = req.clone({ headers });
            return next.handle(authReq).toPromise();
        } else {
            return next.handle(req).toPromise();
        }
    }
}