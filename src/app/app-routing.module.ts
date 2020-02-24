import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessDeniedComponent } from './shared/access-denied/access-denied.component';
import { MainTemplateComponent } from './shared/main-template/main-template.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { DashboardResolver } from './components/dashboard/dashboard.resolver';
import { ModuleAccessGuard } from './guards/moduleAcces.guard';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '', component: MainTemplateComponent,
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      {
        path: 'dashboard', component: DashboardComponent,
        resolve: { dashboard: DashboardResolver }, canActivate: [AuthGuard]
      },
      {
        path: 'lead', canLoad: [ModuleAccessGuard],
        loadChildren: './modules/lead/lead.module#LeadModule'
      },
      {
        path: 'job', canLoad: [ModuleAccessGuard],
        loadChildren: './modules/job/job.module#JobModule'
      },
      {
        path: 'account', canLoad: [ModuleAccessGuard],
        loadChildren: './modules/account/account.module#AccountModule'
      },
      {
        path: 'contact', canLoad: [ModuleAccessGuard],
        loadChildren: './modules/contact/contact.module#ContactModule'
      },
      {
        path: 'company', canLoad: [ModuleAccessGuard],
        loadChildren: './modules/company/company.module#CompanyModule'
      },
      { path: 'access-denied', component: AccessDeniedComponent, canActivate: [AuthGuard] },
      // { path: '**', redirectTo: '/page-not-found', pathMatch: 'full' }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'welcome-page', component: WelcomePageComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }