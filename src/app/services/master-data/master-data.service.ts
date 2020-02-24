import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { ApiLinkWithResponse } from '../../models/master-data/api-link.model';
import { ApplicationTrackingWithResponse } from '../../models/master-data/application-tracking.model';
import { ClassificationWithResponse, SubClassificationModelWithResponse, SuperClassficationModelWithResponse } from '../../models/master-data/classification.model';
import { CompanyTypeWithResponse } from '../../models/master-data/company-type.model';
import { CountryWithResponse } from '../../models/master-data/country.model';
import { DepartmentWithResponse } from '../../models/master-data/department.model';
import { EducationGroupWithResponse, EducationGroupDetailWithReponse, EducationSpecializationDetailWithResponse, EducationSpecializationTypeWithResponse } from '../../models/master-data/education.model';
import { FunctionalWithResponse, FunctionalGroupWithResponse, SubFunctionalModelWithResponse, SuperFunctionalModelWithResponse } from '../../models/master-data/functional.model';
import { IndustryWithResponse, IndustryGroupWithResponse } from '../../models/master-data/industry.model';
import { MailCredentialWithResponse } from '../../models/master-data/mail-credential.model';
import { MeetingSubjectWithResponse } from '../../models/master-data/meeting-subject.model';
import { ModuleListWithResponse } from '../../models/master-data/module-list.model';
import { NoticeByOutWithResponse } from '../../models/master-data/noticebyout.model';
import { PayOutTickerWithResponse } from '../../models/master-data/payOutticker.model';
import { PortalWithResponse, ProcessWithResponse, ProductWithResponse } from '../../models/master-data/portal-process-product.model';
import { ProposedServiceWithResponse } from '../../models/master-data/proposed-services.model';
import { QualificationParameterModelWithResponse, QualificationScaleModelWithResponse } from '../../models/master-data/qualification.model';
import { ServiceWithResponse } from '../../models/master-data/service.model';
import { SubjectFieldWithResponse, TaskSubjectWithResponse } from '../../models/master-data/subject.model';
import { TimeZoneWithResponse } from '../../models/master-data/time-zone.model';
import { ToolAndTechnologyWithResponse } from '../../models/master-data/tool-and-technology.model';
import { StateModelWithResponse } from '../../models/master-data/state.model';
import { CityModelWithResponse } from '../../models/master-data/city.model';
import { UserModelWithResponse } from '../../models/master-data/user.model';
import { CurrencyModelWithResponse } from '../../models/master-data/currency.model';
import { TeamMemberModelWithResponse } from '../../models/master-data/team-member.model';
import { DataSearchModel } from '../../models/data-search.model';
import { EmployeeTargetModelWithResponse } from '../../models/master-data/employee-target.model';
import { GhCompetetorWithResponse } from '../../models/master-data/gh-competetor.model';

@Injectable({
    providedIn: 'root'
})
export class MasterDataService {
    constructor(
        private _ApiService: ApiService
    ) { }
    getApiLink(searchBody: DataSearchModel): Promise<ApiLinkWithResponse> {
        return this._ApiService.postRequest<ApiLinkWithResponse>(`master-details/apilinks/search`, searchBody);
    }
    getApplicationTracking(searchBody: DataSearchModel): Promise<ApplicationTrackingWithResponse> {
        return this._ApiService.postRequest<ApplicationTrackingWithResponse>(`master-details/app-tracking/search`, searchBody);
    }
    getClassification(searchBody: DataSearchModel): Promise<ClassificationWithResponse> {
        return this._ApiService.postRequest<ClassificationWithResponse>(`master-details/classification/search`, searchBody);
    }
    getSubClassification(classificationId: number, name: string, perPage: number, pageNumber: number): Promise<SubClassificationModelWithResponse> {
        return this._ApiService.getRequest<SubClassificationModelWithResponse>(`admin/master-details/subclassification/${classificationId}?name=${name}&perPage=${perPage}&next=${pageNumber}`);
    }
    getSupClassification(subclassificationId: number, name: string, perPage: number, pageNumber: number): Promise<SuperClassficationModelWithResponse> {
        return this._ApiService.getRequest<SuperClassficationModelWithResponse>(`admin/master-details/supclassification/${subclassificationId}?name=${name}&perPage=${perPage}&next=${pageNumber}`);
    }
    getCompanyType(searchBody: DataSearchModel): Promise<CompanyTypeWithResponse> {
        return this._ApiService.postRequest<CompanyTypeWithResponse>(`master-details/companytype/search`, searchBody);
    }
    getCountry(perPage: number, pageNumber: number, name?: string, code?: string): Promise<CountryWithResponse> {
        return this._ApiService.getRequest<CountryWithResponse>(`admin/master-details/country?countrycode=${code || ''}&name=${name || ''}&perPage=${perPage}&next=${pageNumber}`);
    }
    getState(countryId: number, perPage: number, pageNumber: number, name?: string, stateCode?: string): Promise<StateModelWithResponse> {
        return this._ApiService.getRequest<StateModelWithResponse>(`admin/master-details/state?countryid=${countryId}&statecode=${stateCode || ''}&name=${name || ''}&perPage=${perPage}&next=${pageNumber}`);
    }
    getCity(perPage: number, pageNumber: number, cityName?: string, cityCode?: string, stateId?: string, countryId?: string): Promise<CityModelWithResponse> {
        return this._ApiService.getRequest<CityModelWithResponse>(`admin/master-details/city?countryid=${countryId}&stateid=${stateId}&citycode=${cityCode || ''}&cityname=${cityName || ''}&perPage=${perPage}&next=${pageNumber}`);
    }
    getDepartment(searchBody: DataSearchModel): Promise<DepartmentWithResponse> {
        return this._ApiService.postRequest<DepartmentWithResponse>(`master-details/department/search`, searchBody);
    }
    getEducatonGroup(searchBody: DataSearchModel): Promise<EducationGroupWithResponse> {
        return this._ApiService.postRequest<EducationGroupWithResponse>(`master-details/edu-group/search`, searchBody);
    }
    getEducationGroupDetail(searchBody: DataSearchModel): Promise<EducationGroupDetailWithReponse> {
        return this._ApiService.postRequest<EducationGroupDetailWithReponse>(`master-details/edu-group-detail/search`, searchBody);
    }
    getEducationSpecializationDetail(searchBody: DataSearchModel): Promise<EducationSpecializationDetailWithResponse> {
        return this._ApiService.postRequest<EducationSpecializationDetailWithResponse>(`master-details/edu-spec-detail/search`, searchBody);
    }
    getEducationSpecializationType(searchBody: DataSearchModel): Promise<EducationSpecializationTypeWithResponse> {
        return this._ApiService.postRequest<EducationSpecializationTypeWithResponse>(`master-details/edu-spec-types/search`, searchBody);
    }
    searchFunctional(searchBody: DataSearchModel): Promise<FunctionalWithResponse> {
        return this._ApiService.postRequest<FunctionalWithResponse>(`master-details/functional/search`, searchBody);
    }
    searchFunctionalGroup(searchBody: DataSearchModel): Promise<FunctionalGroupWithResponse> {
        return this._ApiService.postRequest<FunctionalGroupWithResponse>(`master-details/fn-group/search`, searchBody);
    }
    searchSuperFunctional(searchBody: DataSearchModel): Promise<SuperFunctionalModelWithResponse> {
        return this._ApiService.postRequest<SuperFunctionalModelWithResponse>(`master-details/sup-functional/search`, searchBody);
    }
    getGhCompetetor(searchBody: DataSearchModel): Promise<GhCompetetorWithResponse> {
        return this._ApiService.postRequest<GhCompetetorWithResponse>(`master-details/acc-ghcompetitor/search`, searchBody);
    }
    getIndustry(searchBody: DataSearchModel): Promise<IndustryWithResponse> {
        return this._ApiService.postRequest<IndustryWithResponse>(`master-details/industry/search`, searchBody);
    }
    getIndustryGroup(searchBody: DataSearchModel): Promise<IndustryGroupWithResponse> {
        return this._ApiService.postRequest<IndustryGroupWithResponse>(`master-details/industrygroup/search`, searchBody);
    }
    // getInvoiceACode(perPage: number, pageNumber: number): Promise<> {
    //     this.tableName = 'invoicesaccode'; This Api model not found
    //     return this._ApiService.postRequest<>(`admin/master-details/${this.tableName}?perPage=${perPage}&next=${pageNumber}`);
    // }
    getModuleList(searchBody: DataSearchModel): Promise<ModuleListWithResponse> {
        return this._ApiService.postRequest<ModuleListWithResponse>(`master-details/module-list/search`, searchBody);
    }
    getMailCredentail(searchBody: DataSearchModel): Promise<MailCredentialWithResponse> {
        return this._ApiService.postRequest<MailCredentialWithResponse>(`master-details/mail-cred/search`, searchBody);
    }
    getMeetingSubject(searchBody: DataSearchModel): Promise<MeetingSubjectWithResponse> {
        return this._ApiService.postRequest<MeetingSubjectWithResponse>(`master-details/meeting-subject/search`, searchBody);
    }
    getNoticeByOut(searchBody: DataSearchModel): Promise<NoticeByOutWithResponse> {
        return this._ApiService.postRequest<NoticeByOutWithResponse>(`master-details/notice-byout/search`, searchBody);
    }
    getPayOutTicker(searchBody: DataSearchModel): Promise<PayOutTickerWithResponse> {
        return this._ApiService.postRequest<PayOutTickerWithResponse>(`master-details/payout-ticker/search`, searchBody);
    }
    getPortal(searchBody: DataSearchModel): Promise<PortalWithResponse> {
        return this._ApiService.postRequest<PortalWithResponse>(`master-details/portals/search`, searchBody);
    }
    getProcess(searchBody: DataSearchModel): Promise<ProcessWithResponse> {
        return this._ApiService.postRequest<ProcessWithResponse>(`master-details/process/search`, searchBody);
    }
    getProduct(searchBody: DataSearchModel): Promise<ProductWithResponse> {
        return this._ApiService.postRequest<ProductWithResponse>(`master-details/products/search`, searchBody);
    }
    getProposedService(searchBody: DataSearchModel): Promise<ProposedServiceWithResponse> {
        return this._ApiService.postRequest<ProposedServiceWithResponse>(`master-details/proposed-services/search`, searchBody);
    }
    getQualificationParameter(searchBody: DataSearchModel): Promise<QualificationParameterModelWithResponse> {
        return this._ApiService.postRequest<QualificationParameterModelWithResponse>(`master-details/qual-parameters/search`, searchBody);
    }
    getQualificationScale(searchBody: DataSearchModel): Promise<QualificationScaleModelWithResponse> {
        return this._ApiService.postRequest<QualificationScaleModelWithResponse>(`master-details/qual-scale/search`, searchBody);
    }
    // getRectruitmentMail(perPage: number, pageNumber: number): Promise<ModuleListWithResponse> {
    //     this.tableName = 'recruitmentmails'; This api model not exists.
    //     return this._ApiService.postRequest<ModuleListWithResponse>(`admin/master-details/${this.tableName}?perPage=${perPage}&next=${pageNumber}`);
    // }
    // getRole(perPage: number, pageNumber: number): Promise<ModuleListWithResponse> {
    //     this.tableName = 'roles'; This api model not exists.
    //     return this._ApiService.postRequest<ModuleListWithResponse>(`admin/master-details/${this.tableName}?perPage=${perPage}&next=${pageNumber}`);
    // }
    getService(searchBody: DataSearchModel): Promise<ServiceWithResponse> {
        return this._ApiService.postRequest<ServiceWithResponse>(`master-details/services/search`, searchBody);
    }
    getSubjectField(searchBody: DataSearchModel): Promise<SubjectFieldWithResponse> {
        return this._ApiService.postRequest<SubjectFieldWithResponse>(`master-details/subject-fields/search`, searchBody);
    }
    getTaskSubject(searchBody: DataSearchModel): Promise<TaskSubjectWithResponse> {
        return this._ApiService.postRequest<TaskSubjectWithResponse>(`master-details/task-subject/search`, searchBody);
    }
    getTimeZone(searchBody: DataSearchModel): Promise<TimeZoneWithResponse> {
        return this._ApiService.postRequest<TimeZoneWithResponse>(`master-details/timezone/search`, searchBody);
    }
    getToolAndTechnology(searchBody: DataSearchModel): Promise<ToolAndTechnologyWithResponse> {
        return this._ApiService.postRequest<ToolAndTechnologyWithResponse>(`master-details/tool-and-tech/search`, searchBody);
    }
    getUser(searchBody: DataSearchModel): Promise<UserModelWithResponse> {
        return this._ApiService.postRequest<UserModelWithResponse>(`master-details/users/search`, searchBody);
    }
    getCurrency(searchBody: DataSearchModel): Promise<CurrencyModelWithResponse> {
        return this._ApiService.postRequest<CurrencyModelWithResponse>(`master-details/currency-rate/search`, searchBody);
    }
    getTeamMember(module: string, parentId: string, perPage: number, pageNumber: number): Promise<TeamMemberModelWithResponse> {
        return this._ApiService.getRequest<TeamMemberModelWithResponse>(`admin/assignusers?module=${module}&parentId=${parentId}&perPage=${perPage}&next=${pageNumber}`);
    }
    // Search Api
    searchSubFunctional(searchBody: DataSearchModel): Promise<SubFunctionalModelWithResponse> {
        return this._ApiService.postRequest<SubFunctionalModelWithResponse>(`master-details/sub-functional/search`, searchBody);
    }
    searchQualificationParameter(searchBody: DataSearchModel): Promise<QualificationParameterModelWithResponse> {
        return this._ApiService.postRequest<QualificationParameterModelWithResponse>(`admin/master-details/qualificationparameter/search`, searchBody);
    }
    searchEducationSpecializationDetail(specializationId: number, perPage: number, next: number): Promise<EducationSpecializationDetailWithResponse> {
        return this._ApiService.getRequest<EducationSpecializationDetailWithResponse>(`admin/master-details/educationspecializationdetail/search?specializationId=${specializationId}&perPage=${perPage}&next=${next}`);
    }
    searchEducationSpecializationType(searchBody: DataSearchModel): Promise<EducationSpecializationTypeWithResponse> {
        return this._ApiService.postRequest<EducationSpecializationTypeWithResponse>(`master-details/edu-spec-types/search`, searchBody);
    }
    searchEducationGroup(searchBody: DataSearchModel): Promise<EducationGroupWithResponse> {
        return this._ApiService.postRequest<EducationGroupWithResponse>(`master-details/edu-group/search`, searchBody);
    }
    searchEducationGroupDetail(perPage: number, next: number): Promise<EducationGroupDetailWithReponse> {
        return this._ApiService.getRequest<EducationGroupDetailWithReponse>(`admin/master-details/educationgroupdetail/perPage=${perPage}&next=${next}`);
    }
    searchAccountEmployeeTarget(searchBody: DataSearchModel): Promise<EmployeeTargetModelWithResponse> {
        return this._ApiService.postRequest<EmployeeTargetModelWithResponse>(`master-details/acc-target-employer/search`, searchBody);
    }
    // GH CC Service
    searchUserDetail(searchBody: DataSearchModel): Promise<UserModelWithResponse> {
        return this._ApiService.postRequest<UserModelWithResponse>(`master-details/users/search`, searchBody);
    }
    searchClientSheet(searchBody: DataSearchModel): Promise<any> {
        return this._ApiService.postRequest<any>(`master-details/temp-client-sheet/search`, searchBody);
    }
}