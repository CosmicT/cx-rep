import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { CompanyComponent } from './company.component';
import { companyComponents, companyEntryComponents, companyResolvers, CompanyRoutingModule } from './company-routing.module';
import { DxDataGridModule, DxDropDownBoxModule } from 'devextreme-angular';

@NgModule({
    declarations: [
        CompanyComponent,
        companyComponents
    ],
    imports: [
        RouterModule,
        FormsModule,
        CommonModule,
        FontAwesomeModule,
        NgbModule,
        ReactiveFormsModule,
        NgSelectModule,
        CompanyRoutingModule,
        NgbModule,
        // Devextreme 
        DxDataGridModule,
        DxDropDownBoxModule
    ],
    providers: [companyResolvers],
    entryComponents: [companyEntryComponents]
})
export class CompanyModule { }