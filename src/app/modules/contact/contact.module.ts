import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ContactRoutingModule, contactComponents, contactEntryComponents, contactResolvers } from './contact-routing.module';
import { DxDataGridModule, DxBulletModule, DxDropDownBoxModule, DxLookupModule } from 'devextreme-angular';

@NgModule({
    declarations: [
        ContactComponent,
        contactComponents
    ],
    imports: [
        RouterModule,
        FormsModule,
        CommonModule,
        FontAwesomeModule,
        NgbModule,
        ReactiveFormsModule,
        NgSelectModule,
        ContactRoutingModule,
        DxDataGridModule,
        DxBulletModule,
        DxDropDownBoxModule,
        DxLookupModule
    ],
    exports: [],
    entryComponents: [contactEntryComponents],
    providers: [contactResolvers]
})
export class ContactModule { }