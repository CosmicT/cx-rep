import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { ContactViewComponent } from './components/contact-view/contact-view.component';
import { ContactViewResolver } from './components/contact-view/contact-view.resolver';
import { ContactViewQualificationParameterComponent } from './components/contact-view/contact-view-qualification-parameter/contact-view-qualification-parameter.component';
import { ContactViewTeamMemberComponent } from './components/contact-view/contact-view-team-member/contact-view-team-member.component';
import { ContactViewBasicComponent } from './components/contact-view/contact-view-basic/contact-view-basic.component';
import { CreateParameterScaleComponent } from './components/contact-view/contact-view-qualification-parameter/create-parameter-scale/create-parameter-scale.component';
import { SearchContactComponent } from './components/search-contact/search-contact.component';

const routes: Routes = [
    {
        path: '', component: ContactComponent, canActivate: [AuthGuard],
        children: [
            { path: 'contact-view', component: ContactViewComponent, resolve: { contact: ContactViewResolver } },
            { path: 'search-contact', component: SearchContactComponent }
        ]
    }
];
export const contactComponents = [
    ContactViewComponent,
    ContactViewQualificationParameterComponent,
    ContactViewTeamMemberComponent,
    ContactViewBasicComponent,
    CreateParameterScaleComponent,
    SearchContactComponent
];
export const contactEntryComponents = [
    CreateParameterScaleComponent
];
export const contactResolvers = [
    ContactViewResolver
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactRoutingModule { }