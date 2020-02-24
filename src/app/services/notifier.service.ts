import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class NotifierService {
    constructor(private _ToastrService: ToastrService) { }

    showSuccess(message: string) {
        this._ToastrService.success(message);
    }
    showError(message: string) {
        this._ToastrService.error(message);
    }
}