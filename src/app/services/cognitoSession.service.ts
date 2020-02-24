import { Injectable } from '@angular/core';
import { CognitoUserSession } from 'amazon-cognito-identity-js';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CognitoSessionService {
    cognitoCurrentUserSession: Subject<CognitoUserSession>;
    cognitoCurrentUserSessionAccessTokenAsObservable: Subject<string>;
    cognitoCurrentUserSessionAccessToken: string;
    isAuthenticatedAsObservable: Subject<boolean>;
    isAuthenticated: boolean;
    constructor() {
        this.cognitoCurrentUserSession = new BehaviorSubject<CognitoUserSession>(null as CognitoUserSession);
        this.cognitoCurrentUserSessionAccessTokenAsObservable = new BehaviorSubject<string>('');
        this.cognitoCurrentUserSessionAccessToken = '';
        this.isAuthenticatedAsObservable = new BehaviorSubject<boolean>(false);
        this.isAuthenticated = false;
    }
    setCognitoUserSession(congito: CognitoUserSession) {
        this.cognitoCurrentUserSession.next(congito);
    }
    getCongitoUserSession(): Observable<CognitoUserSession> {
        return this.cognitoCurrentUserSession.asObservable();
    }
    setCognitoUserSessionAccessToken(cognitoCurrentUserSession: string) {
        this.cognitoCurrentUserSessionAccessToken = cognitoCurrentUserSession;
        this.cognitoCurrentUserSessionAccessTokenAsObservable.next(cognitoCurrentUserSession);
    }
    getCognitoUserSessionAccessTokenAsObservable(): Observable<string> {
        return this.cognitoCurrentUserSessionAccessTokenAsObservable.asObservable();
    }
    getCognitoUserSessionAccessToken() {
        return this.cognitoCurrentUserSessionAccessToken;
    }
    setIsAuthenticated(authentication: boolean) {
        this.isAuthenticatedAsObservable.next(authentication);
        this.isAuthenticated = authentication;
    }
    getIsAuthenticated() {
        return this.isAuthenticated;
    }
    getIsAuthenticatedAsObservable() {
        return this.isAuthenticatedAsObservable.asObservable();
    }
}