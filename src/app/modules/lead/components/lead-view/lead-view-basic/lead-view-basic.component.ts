import { Component, Input } from '@angular/core';
import { ContactModel } from '../../../models/contact.model';

@Component({
    selector: 'app-lead-view-basic',
    templateUrl: './lead-view-basic.component.html'
})
export class LeadViewBasicComponent {
    @Input() contact: ContactModel;
    constructor() {
        this.contact = new ContactModel();
    }
}