import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccountComponent } from './account.component';
import { accountComponents, accountEntryComponents, accountResolvers, AccountRoutingModule } from './account-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DevExtremeCustomModule } from '../dev-extreme-custom.module';
import { DxDropDownBoxModule, DxDataGridModule, DxHtmlEditorModule, DxToolbarModule, DxBulletModule, DxLookupModule } from 'devextreme-angular';
@NgModule({
    declarations: [
        AccountComponent,
        accountComponents
    ],
    imports: [
        RouterModule,
        FormsModule,
        CommonModule,
        FontAwesomeModule,
        ReactiveFormsModule,
        NgSelectModule,
        NgbModule,
        AccountRoutingModule,
        DevExtremeCustomModule,
        DxDropDownBoxModule,
        DxDataGridModule,
        DxHtmlEditorModule,
        DxToolbarModule,
        DxBulletModule,
        DxLookupModule
    ],
    providers: [accountResolvers],
    entryComponents: [accountEntryComponents],
    exports: []
})
export class AccountModule { }