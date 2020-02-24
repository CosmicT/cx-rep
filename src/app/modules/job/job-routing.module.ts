import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEditJobComponent } from './components/create-edit-job/create-edit-job.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { JobComponent } from './job.component';
import { JobViewComponent } from './components/job-view/job-view.component';
import { SearchJobComponent } from './components/search-job/search-job.component';
import { JobViewWorkflowComponent } from './components/job-view/job-view-workflow/job-view-workflow.component';
import { JobViewLocationAddressComponent } from './components/job-view/job-view-location-address/job-view-location-address.component';
import { JobViewJobDescriptionComponent } from './components/job-view/job-view-job-description/job-view-job-description.component';
import { JobViewEducationDetailComponent } from './components/job-view/job-view-education-detail/job-view-education-detail.component';
import { JobViewBasicComponent } from './components/job-view/job-view-basic/job-view-basic.component';
import { JobViewAuxiliaryComponent } from './components/job-view/job-view-auxiliary/job-view-auxiliary.component';
const routes: Routes = [
    {
        path: '', component: JobComponent, canActivate: [AuthGuard],
        children: [
            { path: 'create-edit-job', component: CreateEditJobComponent },
            { path: 'job-view', component: JobViewComponent },
            { path: 'search-job', component: SearchJobComponent }
        ]
    },
];
export const jobComponents = [
    CreateEditJobComponent,
    JobViewComponent,
    SearchJobComponent,
    JobViewWorkflowComponent,
    JobViewLocationAddressComponent,
    JobViewJobDescriptionComponent,
    JobViewEducationDetailComponent,
    JobViewBasicComponent,
    JobViewAuxiliaryComponent
];
export const jobEntryComponents = [
];
export const jobResolvers = [];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JobRoutingModule { }