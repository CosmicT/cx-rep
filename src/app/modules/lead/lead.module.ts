import { NgModule } from '@angular/core';
import { LeadComponent } from './lead.component';
import { LeadRoutingModule, leadComponents, leadEntryComponents, leadResolvers } from './lead-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DxDataGridModule, DxBulletModule, DxDropDownBoxModule, DxLookupModule } from 'devextreme-angular';
import { GooglePlaceDirective } from 'src/app/directives/google-place.directive';
import { DevExtremeCustomModule } from '../dev-extreme-custom.module';

@NgModule({
    declarations: [
        LeadComponent,
        leadComponents,
        GooglePlaceDirective
    ],
    imports: [
        RouterModule,
        FormsModule,
        CommonModule,
        FontAwesomeModule,
        NgbModule,
        ReactiveFormsModule,
        NgSelectModule,
        LeadRoutingModule,
        DevExtremeCustomModule,
        // DevExtreme Module
        DxDataGridModule,
        DxBulletModule,
        DxDropDownBoxModule,
        DxLookupModule
    ],
    providers: [leadResolvers],
    entryComponents: [leadEntryComponents],
    exports: [
        GooglePlaceDirective
    ]
})
export class LeadModule { }