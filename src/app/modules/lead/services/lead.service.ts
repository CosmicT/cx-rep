import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ContactModelWithResponse, ContactModel } from '../models/contact.model';
import { ResponseBase } from 'src/app/models/response-base.model';
import { SearchUserModelWithResponse } from '../models/search-user.model';
import { AccountAddressModelWithResponse } from '../models/account-address.model';
import { ReportingModelWithResponse } from '../models/reporting.model';
import { EmailAddressRelationModel, EmailAddressRelationModelWithResponse } from '../models/email-address-relation.model';
import { DataSearchModel } from 'src/app/models/data-search.model';
import { AccountModelWithResponse } from '../../account/models/account.model';

@Injectable({
    providedIn: 'root'
})
export class LeadService {
    constructor(
        private _ApiService: ApiService
    ) { }
    searchCompany(isAccount: number, name: string, perPage: number, next: number): Promise<AccountModelWithResponse> {
        return this._ApiService.getRequest<AccountModelWithResponse>(`account?name=${name}&isaccount=${isAccount}&perPage=${perPage}&next=${next}`);
    }
    getParentCompany(perPage: number, next: number): Promise<ContactModelWithResponse> {
        return this._ApiService.getRequest<ContactModelWithResponse>(`admin/master-details/accounts?perPage=${perPage}&next=${next}`);
    }
    getCompanyAndAccount(searchBody: any, perPage: number, next: number): Promise<ContactModelWithResponse> {
        return this._ApiService.postRequest<ContactModelWithResponse>(`accounts?perPage=${perPage}&next=${next}`, searchBody);
    }
    addAccountAndCompany(accountInfo: any): Promise<ResponseBase> {
        return this._ApiService.postRequest<ResponseBase>(`account-module/account-details`, accountInfo);
    }
    searchUserByUsername(username: string, perPage: number, next: number): Promise<SearchUserModelWithResponse> {
        return this._ApiService.getRequest<SearchUserModelWithResponse>(`lead-module/users?username=${username}&perPage=${perPage}&next=${next}`);
    }
    createLead(createLead: any): Promise<ResponseBase> {
        return this._ApiService.postRequest<ResponseBase>(`contact-module/contact-detail`, createLead);
    }
    // same api method as in account service
    getAccountAddress(name: string, perPage: number, next: number): Promise<AccountAddressModelWithResponse> {
        return this._ApiService.getRequest<AccountAddressModelWithResponse>(`account-module/edit-account/competition?name=${name}&perPage=${perPage}&next=${next}`);
    }
    getReportingTo(accountId: string, perPage: number, next: number): Promise<ReportingModelWithResponse> {
        return this._ApiService.getRequest<ReportingModelWithResponse>(`contact-module/contact-detail-by-accountid/?accountid=${accountId}&perPage=${perPage}&next=${next}`);
    }
    getLeadById(leadId: string, perPage: number, next: number): Promise<ContactModelWithResponse> {
        return this._ApiService.getRequest<ContactModelWithResponse>(`contact-module/contact-detail/${leadId}?perPage=${perPage}&next=${next}`);
    }
    updateLeadById(leadId: string, leadValue: ContactModel): Promise<ResponseBase> {
        return this._ApiService.putRequest<ResponseBase>(`contact-module/contact-detail/${leadId}`, leadValue);
    }
    convertLead(leadId: string, formValue: any): Promise<ResponseBase> {
        return this._ApiService.putRequest<ResponseBase>(`contact-module/contact-detail/convertlead/${leadId}`, formValue);
    }
    quitLead(leadId: string, formValue: any): Promise<ResponseBase> {
        return this._ApiService.putRequest<ResponseBase>(`contact-module/contact-detail/quitLead/${leadId}`, formValue);
    }
    createEmailAddressRelation(emailAddressRelation: EmailAddressRelationModel): Promise<ResponseBase> {
        return this._ApiService.postRequest<ResponseBase>(`contact-module/emailaddressrelation`, emailAddressRelation);
    }
    getEmailAddressRelation(parentId: string, perPage: number, next: number): Promise<EmailAddressRelationModelWithResponse> {
        return this._ApiService.getRequest<EmailAddressRelationModelWithResponse>(`contact-module/emailaddressrelation?parentid=${parentId}&perPage=${perPage}&next=${next}`);
    }
    updateEmailAddressRelation(relationId: string, emailAddressRelation: EmailAddressRelationModel): Promise<ResponseBase> {
        return this._ApiService.putRequest<ResponseBase>(`contact-module/emailaddressrelation/${relationId}`, emailAddressRelation);
    }
    getContactDataOnEmailAndPhone(formValue: any, perPage: number, next: number): Promise<ContactModelWithResponse> {
        return this._ApiService.postRequest<ContactModelWithResponse>(`contact-module/emailandmobile?perPage=${perPage}&next=${next}`, formValue);
    }
    searchLead(searchBody: DataSearchModel): Promise<ContactModelWithResponse> {
        return this._ApiService.postRequest<ContactModelWithResponse>(`master-details/contact/search`, searchBody);
    }
    // This Api is used in search lead and contact
    leadView(searchBody: DataSearchModel): Promise<ContactModelWithResponse> {
        return this._ApiService.postRequest<ContactModelWithResponse>(`lead-module/leadview/search`, searchBody);
    }
}