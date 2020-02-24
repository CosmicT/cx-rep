import { Component, OnInit } from '@angular/core';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import { Router, RouterEvent, NavigationStart, NavigationCancel, NavigationError, NavigationEnd } from '@angular/router';
import { LoaderService } from './services/loader.service';
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hi-Tech';
  constructor(
    private _Router: Router,
    private _LoaderService: LoaderService,
    private _SessionService: SessionService
  ) {
    this._Router.events.subscribe((data: RouterEvent) => {
      this.routerInterceptor(data);
    });
  }
  ngOnInit() {
    Amplify.configure(awsconfig);
    Amplify.configure({
      Auth: {
        cookieStorage: {
          domain: '.d2v7ivxnfslaoe.cloudfront.net',
          // domain: 'localhost',
          path: '/',
          expires: 1,
          secure: true
        }
      }
    });
    window.addEventListener('storage', (event) => {
      if (event.storageArea === localStorage) {
        if (this._SessionService.getSession('isAuthenticated') === null || this._SessionService.getSession('isAuthenticated') === undefined) {
          this._Router.navigate(['/login']);
        }
      }
    });
  }
  routerInterceptor(event: RouterEvent) {
    if (event instanceof NavigationStart) {
      this._LoaderService.setState(true);
    } else if (event instanceof NavigationCancel) {
      this._LoaderService.setState(false);
    } else if (event instanceof NavigationError) {
      this._LoaderService.setState(false);
    } else if (event instanceof NavigationEnd) {
      this._LoaderService.setState(false);
    }
  }
}