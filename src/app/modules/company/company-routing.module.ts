import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { SearchCompanyComponent } from './components/search-company/search-company.component';
import { CompanyViewComponent } from './components/company-view/company-view.component';

export const routes: Routes = [
    {
        path: '', component: CompanyComponent, canActivate: [AuthGuard],
        children: [
            { path: 'search-company', component: SearchCompanyComponent },
            { path: 'company-view', component: CompanyViewComponent }
        ]
    }
];
export const companyComponents = [
    SearchCompanyComponent,
    CompanyViewComponent
];
export const companyEntryComponents = [
];
export const companyResolvers = [
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompanyRoutingModule { }