import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router, } from '@angular/router';
import { NotifierService } from './notifier.service';
import { ConfigService } from './config.service';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    apiRoot: string;
    constructor(
        private _HttpClient: HttpClient,
        private _Router: Router,
        private _NotifierService: NotifierService,
        private _ConfigService: ConfigService
    ) {
        this.apiRoot = this._ConfigService.api.root;
    }
    postRequest<T>(url: string, body: any, headers?: HttpHeaders): Promise<T> {
        let request;
        if (headers) {
            request = this._HttpClient.post(this.apiRoot + url, body, { headers });
        } else {
            request = this._HttpClient.post(this.apiRoot + url, body);
        }
        return request
            .toPromise()
            .then(res => {
                return res as T;
            }).catch(err => {
                this.handleError(err);
                return {} as T;
            });
    }
    getRequest<T>(url: string, headers?: HttpHeaders): Promise<T> {
        let request;
        if (headers) {
            request = this._HttpClient.get(this.apiRoot + url, { headers });
        } else {
            request = this._HttpClient.get(this.apiRoot + url);
        }
        return request
            .toPromise()
            .then(res => {
                return res as T;
            }).catch(err => {
                this.handleError(err);
                return {} as T;
            });
    }
    putRequest<T>(url: string, body: any, headers?: HttpHeaders): Promise<T> {
        let request;
        if (headers) {
            request = this._HttpClient.put(this.apiRoot + url, body, { headers });
        } else {
            request = this._HttpClient.put(this.apiRoot + url, body);
        }
        return request
            .toPromise()
            .then(res => {
                return res as T;
            }).catch(err => {
                this.handleError(err);
                return {} as T;
            });
    }
    patchRequest<T>(url: string, body: any, headers?: HttpHeaders): Promise<T> {
        let request;
        if (headers) {
            request = this._HttpClient.patch(this.apiRoot + url, body, { headers });
        } else {
            request = this._HttpClient.patch(this.apiRoot + url, body);
        }
        return request
            .toPromise()
            .then(res => {
                return res as T;
            }).catch(err => {
                this.handleError(err);
                return {} as T;
            });
    }
    deleteRequest<T>(url: string, headers?: HttpHeaders): Promise<T> {
        let request;
        if (headers) {
            request = this._HttpClient.delete(this.apiRoot + url, { headers });
        } else {
            request = this._HttpClient.delete(this.apiRoot + url);
        }
        return request
            .toPromise()
            .then(res => {
                return res as T;
            }).catch(err => {
                this.handleError(err);
                return {} as T;
            });
    }
    handleError(err: HttpErrorResponse | any) {
        if (err.status === 500) {
            this._NotifierService.showError('Server not available');
        } else if (err.status === 404) {
            this._NotifierService.showError('Method/API not available');
        } else if (err.status === 401) {
            // Take Access Token by Refresh token
        } else if (err.status === 400) {
            this._NotifierService.showError('Bad Request');
        }
    }
}