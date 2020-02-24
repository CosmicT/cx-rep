import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { LeadModule } from './modules/lead/lead.module';
import { AccessDeniedComponent } from './shared/access-denied/access-denied.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';
import { MainTemplateComponent } from './shared/main-template/main-template.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardResolver } from './components/dashboard/dashboard.resolver';
import { AuthInterceptor } from './services/auth-interceptor.service';
import { ModuleAccessGuard } from './guards/moduleAcces.guard';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { JobModule } from './modules/job/job.module';
import { AccountModule } from './modules/account/account.module';
import { DevExtremeCustomModule } from './modules/dev-extreme-custom.module';
import { ContactModule } from './modules/contact/contact.module';
import { NumberOnlyDirective } from './directives/number-only.directive';

@NgModule({
  declarations: [
    AppComponent,
    AccessDeniedComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SideMenuComponent,
    MainTemplateComponent,
    WelcomePageComponent,
    LoaderComponent,
    LoginComponent,
    // Directive,
    NumberOnlyDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    // Project Module
    LeadModule,
    JobModule,
    AccountModule,
    ContactModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    DashboardResolver,
    ModuleAccessGuard,
    AuthGuard
  ],
  bootstrap: [AppComponent],
  exports: [
    // GooglePlaceDirective,
    NumberOnlyDirective
  ]
})
export class AppModule { }