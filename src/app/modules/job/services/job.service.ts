import { Injectable } from '@angular/core';
import { PaginationModel } from 'src/app/models/pagination.model';
import { ApiService } from 'src/app/services/api.service';
import { DataSearchModel } from 'src/app/models/data-search.model';
import { JobModel } from '../models/job.model';
import { TemplateMailBodyModelWithResponse } from '../models/template-mail-body.model';
import { ClientMailModelWithResponse } from '../models/client-mail.model';
import { ClientSheetModelWithResponse } from '../models/client-sheet.model';
import { JobIndustryModelWithResponse } from '../models/auxiliary-box/job-industry.model';
import { JobLocationModelWihtResponse } from '../models/auxiliary-box/job-location.model';
import { JobOtherInformationModelWithResponse } from '../models/job-other-info.model';
import { JobPrefenceModelWithResponse } from '../models/auxiliary-box/job-preference.model';
import { JobProductMOdelWithResponse } from '../models/auxiliary-box/job-product.model';
import { JobServiceModelWithResponse } from '../models/auxiliary-box/job-service.model';
@Injectable({
    providedIn: 'root'
})
export class JobService {
    defaultPagination: PaginationModel;
    constructor(
        private _ApiService: ApiService
    ) {
        this.defaultPagination = new PaginationModel();
    }
    searchJob(searchBody: DataSearchModel): Promise<JobModel> {
        return this._ApiService.postRequest<JobModel>(`job-module/search`, searchBody);
    }
    searchTemplateMailBody(searchBody: DataSearchModel): Promise<TemplateMailBodyModelWithResponse> {
        return this._ApiService.postRequest<TemplateMailBodyModelWithResponse>(`master-details/temp-mail-body/search`, searchBody);
    }
    searchJobIndustry(searchBody: DataSearchModel): Promise<JobIndustryModelWithResponse> {
        return this._ApiService.postRequest<JobIndustryModelWithResponse>(`master-details/job-industry/search`, searchBody);
    }
    searchJobClassification(searchBody: DataSearchModel): Promise<any> {
        return this._ApiService.postRequest<any>(`master-details/job-classification/search`, searchBody);
    }
    getClientMail(accountId: string, perPage: number, next: number): Promise<ClientMailModelWithResponse> {
        return this._ApiService.getRequest<ClientMailModelWithResponse>(`job-module/clientemail?accountid=${accountId}&perPage=${perPage}&next=${next}`);
    }
    getJobClassification(searchBody: DataSearchModel): Promise<any> {
        return this._ApiService.postRequest<any>(`master-details/job-classification/search`, searchBody);
    }
    searchJobFunctional(searchBody: DataSearchModel): Promise<any> {
        return this._ApiService.postRequest<any>(`master-details/job-functional/search`, searchBody);
    }
    searchJobSubFunctional(searchBody: DataSearchModel): Promise<any> {
        return this._ApiService.postRequest<any>(`master-details/job-sub-functional/search`, searchBody);
    }
    searchJobSupFunctional(searchBody: DataSearchModel): Promise<any> {
        return this._ApiService.postRequest<any>(`master-details/job-sup-functional/search`, searchBody);
    }
    searchJobSubClassification(searchBody: DataSearchModel): Promise<any> {
        return this._ApiService.postRequest<any>(`master-details/job-sub-classification/search`, searchBody);
    }
    searchJobSupClassification(searchBody: DataSearchModel): Promise<any> {
        return this._ApiService.postRequest<any>(`master-details/job-sup-classification/search`, searchBody);
    }
    getClientSheet(perPage: number, next: number): Promise<ClientSheetModelWithResponse> {
        return this._ApiService.getRequest<ClientSheetModelWithResponse>(`job-module/temp-client-sheet?perPage=${perPage}&next=${next}`);
    }
    getCandidateJobProfile(stageType: string, perPage: number, next: number): Promise<any> {
        return this._ApiService.getRequest<any>(`job-module/attach-stage?stageType=${stageType}&perPage=${perPage}&next=${next}`);
    }
    getCandidateInterviewStage(perPage: number, next: number): Promise<any> {
        return this._ApiService.getRequest<any>(`job-module/interview-stage?perPage=${perPage}&next=${next}`);
    }
    jobLocationSearch(searchBody: DataSearchModel): Promise<JobLocationModelWihtResponse> {
        return this._ApiService.postRequest<JobLocationModelWihtResponse>(`master-details/job-locate/search`, searchBody);
    }
    jobOtherInformationSearch(searchBody: DataSearchModel): Promise<JobOtherInformationModelWithResponse> {
        return this._ApiService.postRequest<JobOtherInformationModelWithResponse>(`master-details/job-other-info/search`, searchBody);
    }
    jobPreferenceSearch(searchBody: DataSearchModel): Promise<JobPrefenceModelWithResponse> {
        return this._ApiService.postRequest<JobPrefenceModelWithResponse>(`master-details/jobpreferences/search`, searchBody);
    }
    jobProductSearch(searchBody: DataSearchModel): Promise<JobProductMOdelWithResponse> {
        return this._ApiService.postRequest<JobProductMOdelWithResponse>(`master-details/jobproducts/search`, searchBody);
    }
    jobServiceSearch(searchBody: DataSearchModel): Promise<JobServiceModelWithResponse> {
        return this._ApiService.postRequest<JobServiceModelWithResponse>(`master-details/jobservices/search`, searchBody);
    }
}