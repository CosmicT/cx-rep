import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ResponseBase } from 'src/app/models/response-base.model';
import { ContactModel } from '../../lead/models/contact.model';
import { CompetitionModelWithResponse } from '../models/competition.model';
import { AccountQualificationHistoryModelWithResponse, AccountQualificationHistoryAndQualificationParameterModel } from '../models/account-qualification.model';
import { AccountOrgStrucureModelWithResponse, AccountOrgStructureModel } from '../models/account-org-structure.model';
import { AccountModel, AccountModelWithResponse } from '../models/account.model';
import { AccountContactQualificationModel, AccountContactQualificationModelWithResponse } from '../../contact/models/account-contact-qualification.model';
import { AccountBusinessStructureModelWithResponse, AccountBusinessStructureModel } from '../models/account-business-structure.model';
import { DataSearchModel } from 'src/app/models/data-search.model';
import { AccountBlackListModelWithResponse } from '../models/account-blacklist.model';
import { AccountBrandWithResponse } from '../models/account-brand.model';
import { AccountClassificationModelWithResponse } from '../models/account-classification.model';
import { GhCompetetorWithResponse } from 'src/app/models/master-data/gh-competetor.model';
import { AccountIndustryWithResponse } from '../models/account-industry.model';
import { AccountIndustryGroupModelWithResponse } from '../models/account-industry-group.model';
import { AccountPoachModelWithResponse } from '../models/account-poach.model';
import { AccountProcessModelWithResponse } from '../models/account-process.model';
import { AccountProductModelWithResponse } from '../models/account-product.model';
import { AccountServiceModelWithResponse } from '../models/account-services.model';
import { AccountSubclassificationModelWithResponse } from '../models/account-subclassification.model';
import { AccountSuperClassificationModelWithResponse } from '../models/account-superClassification.model';
import { AccountToolAndTechModelWithResponse } from '../models/account-tool-and-tech.model';
import { AccountAliasModelWithResponse } from '../models/account-alias.model';
import { AccountDomainModel } from '../models/account-domain.model';
import { AccountGstinModel } from '../models/account-gstin.model';
import { AccountAddressModel, AccountAddressModelWithResponse } from '../../lead/models/account-address.model';
import { AccountViewModelWithResponse } from '../models/account-view.model';


@Injectable({
    providedIn: 'root'
})
export class AccountService {
    constructor(
        private _ApiService: ApiService
    ) { }
    createAccount(accountDetail: ContactModel): Promise<ResponseBase> {
        return this._ApiService.postRequest<ResponseBase>(`account-module/accounts`, accountDetail);
    }
    // This api only insert data in account table
    updateAccount(accountDetail: ContactModel): Promise<ResponseBase> {
        return this._ApiService.putRequest<ResponseBase>(`account-module/accounts`, accountDetail);
    }
    // This api is used for edit the account data
    editAccount(accountDetail: AccountModel): Promise<ResponseBase> {
        return this._ApiService.putRequest<ResponseBase>(`account-module/editaccount`, accountDetail);
    }
    getAccountById(id: string, perPage: number, next: number): Promise<AccountModelWithResponse> {
        return this._ApiService.getRequest<AccountModelWithResponse>(`account-module/accounts/${id}?perPage=${perPage}&next=${next}`);
    }
    getCompetition(perPage: number, next: number, name?: string, accountId?: string): Promise<CompetitionModelWithResponse> {
        return this._ApiService.getRequest<CompetitionModelWithResponse>(`account-module/edit-account/competition?name=${name || ''}&accountid=${accountId || ''}&perPage=${perPage}&next=${next}`);
    }
    getAccountQualificationHistory(searchBody: DataSearchModel): Promise<AccountQualificationHistoryModelWithResponse> {
        return this._ApiService.postRequest<AccountQualificationHistoryModelWithResponse>(`master-details/acc-qual-history/search`, searchBody);
    }
    createAccountQualificationHistoryAndQualificationParameter(accountQualificationHistoryAndParameter: AccountQualificationHistoryAndQualificationParameterModel): Promise<ResponseBase> {
        return this._ApiService.postRequest<ResponseBase>(`contact-module/accountcontactqualification/weightage`, accountQualificationHistoryAndParameter);
    }
    insertAccountAndContactQualification(qualification: AccountContactQualificationModel): Promise<ResponseBase> {
        return this._ApiService.postRequest<ResponseBase>(`contact-module/accountcontactqualification/weightage`, qualification);
    }

    // This method is no more, remove after removing all dependency.
    getAccountBusinessStructure(accountId: string, perPage: number, next: number): Promise<AccountBusinessStructureModelWithResponse> {
        return this._ApiService.getRequest<AccountBusinessStructureModelWithResponse>(`account-module/accountbussinessstructure?accountid=${accountId}&perPage=${perPage}&next=${next}`);
    }

    createAccountOrgStructure(accountOrgStructureValue: AccountOrgStructureModel): Promise<ResponseBase> {
        return this._ApiService.postRequest<ResponseBase>(`account-module/accountorgstructure`, accountOrgStructureValue);
    }
    updateOrgStructure(accountId: string, accountOrgStructureValue: AccountOrgStructureModel): Promise<ResponseBase> {
        return this._ApiService.putRequest<ResponseBase>(`account-module/accountorgstructure/${accountId}`, accountOrgStructureValue);
    }
    updateOrgStructureLevel(accountId: string, accountOrgStructureLevelValue: Array<AccountOrgStructureModel>): Promise<ResponseBase> {
        return this._ApiService.putRequest<ResponseBase>(`account-module/accountorgstructure/level?accountid=${accountId}`, accountOrgStructureLevelValue);
    }
    createAccountDomain(accountDomain: AccountDomainModel): Promise<ResponseBase> {
        return this._ApiService.postRequest<ResponseBase>(`account-module/acc-domain`, accountDomain);
    }
    createdAccountGstInNumber(accountGstin: AccountGstinModel): Promise<ResponseBase> {
        return this._ApiService.postRequest<ResponseBase>(`account-module/acc-gstin-number`, accountGstin);
    }
    updateGstInNumber(accountGstin: AccountGstinModel): Promise<ResponseBase> {
        return this._ApiService.putRequest<ResponseBase>(`account-module/acc-gstin-number`, accountGstin);
    }
    createAccountAddress(accountAddress: AccountAddressModel): Promise<ResponseBase> {
        return this._ApiService.postRequest<ResponseBase>(`account-module/acc-address`, accountAddress);
    }
    updateAccountAddress(accountAddress: AccountAddressModel): Promise<ResponseBase> {
        return this._ApiService.putRequest<ResponseBase>(`account-module/acc-address`, accountAddress);
    }
    updateAccountDomain(accountDomain: AccountDomainModel): Promise<ResponseBase> {
        return this._ApiService.putRequest<ResponseBase>(`account-module/acc-domain`, accountDomain);
    }
    // Search API
    searchAccountAddress(searchBody: DataSearchModel): Promise<AccountAddressModelWithResponse> {
        return this._ApiService.postRequest<AccountAddressModelWithResponse>(`master-details/acc-address/search`, searchBody);
    }
    searchAccount(searchBody: DataSearchModel): Promise<AccountModelWithResponse> {
        return this._ApiService.postRequest<AccountModelWithResponse>(`master-details/accounts/search`, searchBody);
    }
    searchAccountBlackList(searchBody: DataSearchModel): Promise<AccountBlackListModelWithResponse> {
        return this._ApiService.postRequest<AccountBlackListModelWithResponse>(`master-details/acc-blacklist/search`, searchBody);
    }
    searchAccountBrand(searchBody: DataSearchModel): Promise<AccountBrandWithResponse> {
        return this._ApiService.postRequest<AccountBrandWithResponse>(`master-details/acc-brand/search`, searchBody);
    }
    searchAccountBusinessStructure(searchBody: DataSearchModel): Promise<AccountBusinessStructureModelWithResponse> {
        return this._ApiService.postRequest<AccountBusinessStructureModelWithResponse>(`master-details/acc-bussiness-structure/search`, searchBody);
    }
    updateAccountBusinessStructure(accountId: string, accountBusiness: AccountBusinessStructureModel): Promise<ResponseBase> {
        return this._ApiService.putRequest<ResponseBase>(`account-module/accountbussinessstructure/${accountId}`, accountBusiness);
    }
    createAccountBusinessStructure(accountBusiness: AccountBusinessStructureModel): Promise<ResponseBase> {
        return this._ApiService.postRequest<ResponseBase>(`account-module/accountbussinessstructure`, accountBusiness);
    }
    searchAccountClassification(searchBody: DataSearchModel): Promise<AccountClassificationModelWithResponse> {
        return this._ApiService.postRequest<AccountClassificationModelWithResponse>(`master-details/acc-classification/search`, searchBody);
    }
    searchAccountContactQualification(searchBody: DataSearchModel): Promise<AccountContactQualificationModelWithResponse> {
        return this._ApiService.postRequest<AccountContactQualificationModelWithResponse>(`master-details/acc-contact-qual/search`, searchBody);
    }
    searchAccountGhCompetitor(searchBody: DataSearchModel): Promise<GhCompetetorWithResponse> {
        return this._ApiService.postRequest<GhCompetetorWithResponse>(`master-details/acc-ghcompetitor/search`, searchBody);
    }
    searchAccountIndustry(searchBody: DataSearchModel): Promise<AccountIndustryWithResponse> {
        return this._ApiService.postRequest<AccountIndustryWithResponse>(`master-details/acc-industry/search`, searchBody);
    }
    searchAccountIndustryGroup(searchBody: DataSearchModel): Promise<AccountIndustryGroupModelWithResponse> {
        return this._ApiService.postRequest<AccountIndustryGroupModelWithResponse>(`master-details/acc-industry-group/search`, searchBody);
    }
    searchAccountPoach(searchBody: DataSearchModel): Promise<AccountPoachModelWithResponse> {
        return this._ApiService.postRequest<AccountPoachModelWithResponse>(`master-details/acc-nopoach/search`, searchBody);
    }
    searchAccountOrgStructure(searchBody: DataSearchModel): Promise<AccountOrgStrucureModelWithResponse> {
        return this._ApiService.postRequest<AccountOrgStrucureModelWithResponse>(`master-details/acc-org-structure/search`, searchBody);
    }
    searchAccountProcess(searchBody: DataSearchModel): Promise<AccountProcessModelWithResponse> {
        return this._ApiService.postRequest<AccountProcessModelWithResponse>(`master-details/acc-process/search`, searchBody);
    }
    searchAccountProduct(searchBody: DataSearchModel): Promise<AccountProductModelWithResponse> {
        return this._ApiService.postRequest<AccountProductModelWithResponse>(`master-details/acc-product/search`, searchBody);
    }
    searchAccountService(searchBody: DataSearchModel): Promise<AccountServiceModelWithResponse> {
        return this._ApiService.postRequest<AccountServiceModelWithResponse>(`master-details/acc-services/search`, searchBody);
    }
    searchAccountSubClassification(searchBody: DataSearchModel): Promise<AccountSubclassificationModelWithResponse> {
        return this._ApiService.postRequest<AccountSubclassificationModelWithResponse>(`master-details/acc-sub-class/search`, searchBody);
    }
    searchSuperClassification(searchBody: DataSearchModel): Promise<AccountSuperClassificationModelWithResponse> {
        return this._ApiService.postRequest<AccountSuperClassificationModelWithResponse>(`master-details/acc-sup-class/search`, searchBody);
    }
    searchToolAndTech(searchBody: DataSearchModel): Promise<AccountToolAndTechModelWithResponse> {
        return this._ApiService.postRequest<AccountToolAndTechModelWithResponse>(`master-details/acc-tool-tech/search`, searchBody);
    }
    searchAccountAlias(searchBody: DataSearchModel): Promise<AccountAliasModelWithResponse> {
        return this._ApiService.postRequest<AccountAliasModelWithResponse>(`master-details/company-alise/search`, searchBody);
    }
    searchAccountPreference(searchBody: DataSearchModel): Promise<any> {
        return this._ApiService.postRequest<any>(`master-details/acc-preference-company/search`, searchBody);
    }
    // This Api is used in account search
    accountView(searchBody: DataSearchModel): Promise<AccountViewModelWithResponse> {
        return this._ApiService.postRequest<AccountViewModelWithResponse>(`account-module/accountview/search`, searchBody);
    }
}