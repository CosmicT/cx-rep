import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoaderService {
    isBusy: Subject<boolean>;
    constructor() {
        this.isBusy = new BehaviorSubject<boolean>(true);
    }
    getState(): Observable<boolean> {
        return this.isBusy.asObservable();
    }
    setState(state: boolean) {
        this.isBusy.next(state);
    }
}