import { ResponseBase } from 'src/app/models/response-base.model';

export class AccountViewModel {
    id: string;
    name: string;
    parentid: string;
    parentaccountname: string;
    createddate: string;
    lastmodifieddate: string;
    createdby: string;
    modifiedby: string;
    anchorid: string;
    createdusername: string;
    modifiedusername: string;
    anchorname: string;
    isaccount: number;
    status: string;
    deleted: number;
    specialities: string;
    globalhuntclient: string;
    boardnumbercountrycode: number;
    boardnumbercitycode: number;
    boardnumber: string;
    boardnumberfull: string;
    organizationtype: string;
    internalrecruitmentteam: string;
    shortname: string;
    revenue: number;
    revenuecurrency: string;
    totalrevenue: string;
    revenuefromdate: string;
    revenuetodate: string;
    revenuecycle: string;
    pancardno: string;
    empanelmentfromdate: string;
    empanelmenttodate: string;
    empanelmentcycle: string;
    description: string;
    websiteurl: string;
    logoname: string;
    totalcontactrevenue: number;
    accountcategory: string;
    proposedservice: string;
    locationbocitywise: string;
    qualificationweightage: number;
    totaljobs: number;
    domainname: string;
    accounttype: string;
    ishotnote: number;
    ispublish: number;
    agreementstartdate: string;
    agreementenddate: string;
    agreementrenewaldate: string;
    invoicegenerationdays: string;
    targetemployer: string;
    blacklistaccount: string;
    nopoachaccount: string;
    industries: string;
    classifications: string;
    subclassification: string;
    superclassification: string;
    industrygroup: string;
    products: string;
    services: string;
    toolandtechnologytext: string;
    brands: string;
    process: string;
    ghcompetetor: string;
    accountpreferences: string;
    securitygroupusers: string;
    stockexchangelisting: string;
    globalturnover: string;
    usingportal: string;
    segments: string;
    modeofbussiness: string;
    productcompany: string;
    recruitmentteamsize: string;
    senioopeningclosed: string;
    globallyemployeeno: number;
    employeeinindia: number;
    foundedyear: number;
    globalofficess: string;
    totalmendateclosed: string;
    inhouseattirationrate: string;
    numberofvendor: string;
    culteroforganization: string;
    infrastructureoforganization: string;
    applicationtrackingsystem: string;
    noticebyout: string;
    typeofcompany: string;
    rating: string;
    employee: string;
    ownership: string;
    memberof: string;
    vendorcode: string;
    siccode: string;
    taleourl: string;
    domains: string;
    liveposition: string;
    constructor() {
        this.id = '';
        this.name = '';
        this.parentid = '';
        this.parentaccountname = '';
        this.createddate = '';
        this.lastmodifieddate = '';
        this.createdby = '';
        this.modifiedby = '';
        this.anchorid = '';
        this.createdusername = '';
        this.modifiedusername = '';
        this.anchorname = '';
        this.isaccount = 0;
        this.status = '';
        this.deleted = 0;
        this.specialities = '';
        this.globalhuntclient = '';
        this.boardnumbercountrycode = 0;
        this.boardnumbercitycode = 0;
        this.boardnumber = '';
        this.boardnumberfull = '';
        this.organizationtype = '';
        this.internalrecruitmentteam = '';
        this.shortname = '';
        this.revenue = 0;
        this.revenuecurrency = '';
        this.totalrevenue = '';
        this.revenuefromdate = '';
        this.revenuetodate = '';
        this.revenuecycle = '';
        this.pancardno = '';
        this.empanelmentfromdate = '';
        this.empanelmenttodate = '';
        this.empanelmentcycle = '';
        this.description = '';
        this.websiteurl = '';
        this.logoname = '';
        this.totalcontactrevenue = 0;
        this.accountcategory = '';
        this.proposedservice = '';
        this.locationbocitywise = '';
        this.qualificationweightage = 0;
        this.totaljobs = 0;
        this.domainname = '';
        this.accounttype = '';
        this.ishotnote = 0;
        this.ispublish = 0;
        this.agreementstartdate = '';
        this.agreementenddate = '';
        this.agreementrenewaldate = '';
        this.invoicegenerationdays = '';
        this.targetemployer = '';
        this.blacklistaccount = '';
        this.nopoachaccount = '';
        this.industries = '';
        this.classifications = '';
        this.subclassification = '';
        this.superclassification = '';
        this.industrygroup = '';
        this.products = '';
        this.services = '';
        this.toolandtechnologytext = '';
        this.brands = '';
        this.process = '';
        this.ghcompetetor = '';
        this.accountpreferences = '';
        this.securitygroupusers = '';
        this.stockexchangelisting = '';
        this.globalturnover = '';
        this.usingportal = '';
        this.segments = '';
        this.modeofbussiness = '';
        this.productcompany = '';
        this.recruitmentteamsize = '';
        this.senioopeningclosed = '';
        this.globallyemployeeno = 0;
        this.employeeinindia = 0;
        this.foundedyear = 0;
        this.globalofficess = '';
        this.totalmendateclosed = '';
        this.inhouseattirationrate = '';
        this.numberofvendor = '';
        this.culteroforganization = '';
        this.infrastructureoforganization = '';
        this.applicationtrackingsystem = '';
        this.noticebyout = '';
        this.typeofcompany = '';
        this.rating = '';
        this.employee = '';
        this.ownership = '';
        this.memberof = '';
        this.vendorcode = '';
        this.siccode = '';
        this.taleourl = '';
        this.domains = '';
        this.liveposition = '';
    }
}
export class AccountViewModelWithResponse extends ResponseBase {
    data: Array<AccountViewModel>;
    constructor() {
        super();
        this.data = Array<AccountViewModel>();
    }
}