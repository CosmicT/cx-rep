import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { DataSearchModel } from 'src/app/models/data-search.model';
import { ContactViewModelWithResponse } from '../models/contact-view.model';

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    constructor(
        private _ApiService: ApiService
    ) {
    }
    contactView(searchBody: DataSearchModel): Promise<ContactViewModelWithResponse> {
        return this._ApiService.postRequest<ContactViewModelWithResponse>(`contact-module/contactview/search`, searchBody);
    }
}