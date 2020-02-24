import { NgModule } from '@angular/core';
import { DxDataGridModule, DxDropDownBoxModule, DxHtmlEditorModule, DxToolbarModule, DxLookupModule, DxBulletModule } from 'devextreme-angular';

@NgModule({
    declarations: [],
    imports: [
        DxDropDownBoxModule,
        DxDataGridModule,
        DxDropDownBoxModule,
        DxHtmlEditorModule,
        DxToolbarModule,
        DxBulletModule,
        DxDropDownBoxModule,
        DxLookupModule
    ],
    exports: []
})
export class DevExtremeCustomModule { }