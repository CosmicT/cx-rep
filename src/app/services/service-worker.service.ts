import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
@Injectable({
    providedIn: 'root'
})
export class ServiceWorkerService {

    constructor(
        private _SwUpdate: SwUpdate
    ) {
        this._SwUpdate.activated.subscribe(data => {
            console.log('old version was', data.previous);
            console.log('new version is', data.current);
        });
        this._SwUpdate.available.subscribe(data => {
            console.log('old version was', data.available);
            console.log('new version is', data.current);
        });
    }
}