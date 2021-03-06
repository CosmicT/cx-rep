import { ResponseBase } from 'src/app/models/response-base.model';

export class JobOtherInformationModel {
    id: string;
    jobid: string;
    indirecttargetemployer: string;
    directtargetemployer: string;
    clientccemail: string;
    clientbccemail: string;
    ghccemail: string;
    ghbccemail: string;
    industry: string;
    classificaion: string;
    subclassification: string;
    superclassification: string;
    product: string;
    services: string;
    tooltechnologies: string;
    functional: string;
    subfunctional: string;
    superfunctional: string;
    accountpreferences: string;
    totalcandidateattached: number;
    totalcandidateinclientstage: number;
    lastmodifieddate: string;
    securitygroupuser: string;
    indirecttargetemployerid: string;
    directtargetemployerid: string;
    clientccmailid: string;
    clientbccmailid: string;
    classificaionid: string;
    subclassificationid: string;
    superclassificationid: string;
    productid: string;
    servicesid: string;
    tooltechnologiesid: string;
    ghccmailid: string;
    ghbccmailid: string;
    accountpreferencesid: string;
    functionalId: string;
    subfunctionalid: string;
    superfunctionalid: string;
    anykeyword: string;
    allkeyword: string;
    excludekeyword: string;
    skillkeyword: string;
    jobadvisoryfieldcaption: string;
    jobadvisoryfieldname: string;
    deleted: number;
    createdby: string;
    modifiedby: string;
    createdusername: string;
    modifiedusername: string;
    createddate: string;
    jobgradeid: string;
    jobgradetext: string;
    locationid: string;
    locationtext: string;
    industryid: string;
    designationfunctionalkeyword: string;
    gender: string;
    constructor() {
        this.id = '';
        this.jobid = '';
        this.indirecttargetemployer = '';
        this.directtargetemployer = '';
        this.clientccemail = '';
        this.clientbccemail = '';
        this.ghccemail = '';
        this.ghbccemail = '';
        this.industry = '';
        this.classificaion = '';
        this.subclassification = '';
        this.superclassification = '';
        this.product = '';
        this.services = '';
        this.tooltechnologies = '';
        this.functional = '';
        this.subfunctional = '';
        this.superfunctional = '';
        this.accountpreferences = '';
        this.totalcandidateattached = 0;
        this.totalcandidateinclientstage = 0;
        this.lastmodifieddate = '';
        this.securitygroupuser = '';
        this.indirecttargetemployerid = '';
        this.directtargetemployerid = '';
        this.clientccmailid = '';
        this.clientbccmailid = '';
        this.classificaionid = '';
        this.subclassificationid = '';
        this.superclassificationid = '';
        this.productid = '';
        this.servicesid = '';
        this.tooltechnologiesid = '';
        this.ghccmailid = '';
        this.ghbccmailid = '';
        this.accountpreferencesid = '';
        this.functionalId = '';
        this.subfunctionalid = '';
        this.superfunctionalid = '';
        this.anykeyword = '';
        this.allkeyword = '';
        this.excludekeyword = '';
        this.skillkeyword = '';
        this.jobadvisoryfieldcaption = '';
        this.jobadvisoryfieldname = '';
        this.deleted = 0;
        this.createdby = '';
        this.modifiedby = '';
        this.createdusername = '';
        this.modifiedusername = '';
        this.createddate = '';
        this.jobgradeid = '';
        this.jobgradetext = '';
        this.locationid = '';
        this.locationtext = '';
        this.industryid = '';
        this.designationfunctionalkeyword = '';
        this.gender = '';
    }
}
export class JobOtherInformationModelWithResponse extends ResponseBase {
    data: Array<JobOtherInformationModel>;
    constructor() {
        super();
        this.data = Array<JobOtherInformationModel>();
    }
}