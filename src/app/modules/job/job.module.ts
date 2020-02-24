import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { jobComponents, jobEntryComponents, jobResolvers, JobRoutingModule } from './job-routing.module';
import { JobComponent } from './job.component';
import { DxDataGridModule, DxDropDownBoxModule, DxHtmlEditorModule, DxToolbarModule } from 'devextreme-angular';
import { DevExtremeCustomModule } from '../dev-extreme-custom.module';

@NgModule({
    declarations: [
        JobComponent,
        jobComponents
    ],
    imports: [
        RouterModule,
        FormsModule,
        CommonModule,
        FontAwesomeModule,
        NgbModule,
        ReactiveFormsModule,
        NgSelectModule,
        JobRoutingModule,
        DevExtremeCustomModule,
        DxDropDownBoxModule,
        DxDataGridModule,
        DxDropDownBoxModule,
        DxHtmlEditorModule,
        DxToolbarModule
    ],
    providers: [
        jobResolvers
    ],
    entryComponents: [
        jobEntryComponents
    ],
    exports: []
})

export class JobModule { }