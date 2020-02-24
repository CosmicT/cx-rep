import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAccountAndCompanyComponent } from './components/edit-account/edit-account-and-company.component';
import { AccountComponent } from './account.component';
import { AuthGuard } from '../../guards/auth.guard';
import { SearchAccountComponent } from './components/search-account/search-account.component';
import { AccountViewComponent } from './components/account-view/account-view.component';
import { AccountViewResolver } from './components/account-view/account-view.resolver';
import { AccountAuxiliaryComponent } from './components/account-view/account-auxiliary/account-auxiliary.component';
import { AccountMoreInformationComponent } from './components/account-view/account-more-information/account-more-information.component';
import { EditAccountResolver } from './components/edit-account/edit-account.resolver';
const routes: Routes = [
    {
        path: '', component: AccountComponent, canActivate: [AuthGuard],
        children: [
            { path: 'edit-account-and-company/:id', component: EditAccountAndCompanyComponent, resolve: { master: EditAccountResolver } },
            { path: 'search-account', component: SearchAccountComponent },
            { path: 'account-view/:id', component: AccountViewComponent, resolve: { account: AccountViewResolver } }
        ]
    },
];
export const accountComponents = [
    EditAccountAndCompanyComponent,
    SearchAccountComponent,
    AccountViewComponent,
    AccountAuxiliaryComponent,
    AccountMoreInformationComponent
];
export const accountEntryComponents = [
];
export const accountResolvers = [
    AccountViewResolver,
    EditAccountResolver
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }