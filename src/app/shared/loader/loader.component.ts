import { Component, OnInit, OnDestroy } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { LoaderService } from 'src/app/services/loader.service';
import { takeWhile } from 'rxjs/operators';
@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styles: [`
        .spinner {background-color: rgba(255, 255,255, 0.98); z-index: 1100; top: 0; left: 0;}
    `]
})
export class LoaderComponent implements OnInit, OnDestroy {
    faSpinner = faSpinner;
    isBusy: boolean;
    alive: boolean;
    constructor(
        private _LoaderService: LoaderService
    ) {
        this.isBusy = false;
        this.alive = true;
    }
    ngOnInit() {
        this._LoaderService.getState().pipe(takeWhile(() => this.alive)).subscribe(data => {
            this.isBusy = data;
        });
    }
    ngOnDestroy() {
        this.alive = false;
    }
}