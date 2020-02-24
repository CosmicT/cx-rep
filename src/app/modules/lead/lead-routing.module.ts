import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadComponent } from './lead.component';
import { CreateEditLeadComponent } from './components/create-edit-lead/create-edit-lead.component';
import { CreateCompanyAccountComponent } from './components/create-company-account/create-company-account.component';
import { LeadViewComponent } from './components/lead-view/lead-view.component';
import { LeadViewResolver } from './components/lead-view/lead-view.resolver';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { CreateEditLeadResolver } from './components/create-edit-lead/create-edit-lead.resolver';
import { SearchLeadComponent } from './components/search-lead/search-lead.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { LeadViewQualificationParameterComponent } from './components/lead-view/lead-view-qualification-parameter/lead-view-qualification-parameter.component';
import { CreateQualificationParamterComponent } from './components/lead-view/lead-view-qualification-parameter/create-qualification-parameter/create-qualification-parameter.component';
import { LeadViewTeamMemberComponent } from './components/lead-view/lead-view-team-member/lead-view-team-member.component';
import { LeadViewBasicComponent } from './components/lead-view/lead-view-basic/lead-view-basic.component';
const routes: Routes = [
    {
        path: '', component: LeadComponent, canActivate: [AuthGuard],
        children: [
            { path: 'create-edit-lead/:id', component: CreateEditLeadComponent, resolve: { master: CreateEditLeadResolver } },
            { path: 'lead-view/:id', component: LeadViewComponent, resolve: { lead: LeadViewResolver } },
            { path: 'search-lead', component: SearchLeadComponent }
        ]
    },
];
export const leadComponents = [
    CreateEditLeadComponent,
    CreateCompanyAccountComponent,
    LeadViewComponent,
    SearchLeadComponent,
    ConfirmationComponent,
    LeadViewQualificationParameterComponent,
    CreateQualificationParamterComponent,
    LeadViewTeamMemberComponent,
    LeadViewBasicComponent
];
export const leadEntryComponents = [
    CreateCompanyAccountComponent,
    ConfirmationComponent,
    CreateQualificationParamterComponent
];
export const leadResolvers = [
    LeadViewResolver,
    CreateEditLeadResolver
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LeadRoutingModule { }