import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SessionService {
    setSession(keyValue: { [key: string]: string }): void {
        for (const prop in keyValue) {
            if (keyValue.hasOwnProperty(prop)) {
                window.localStorage.removeItem(prop);
                window.localStorage.setItem(prop, keyValue[prop]);
            }
        }
    }

    getSession(key: string): string | null {
        return window.localStorage.getItem(key);
    }

    removeSessions(key: string): void {
        // for (const key in window.localStorage) {
        //     if (window.localStorage.hasOwnProperty(key)) {
        //     }
        // }
        window.localStorage.removeItem(key);
    }
}