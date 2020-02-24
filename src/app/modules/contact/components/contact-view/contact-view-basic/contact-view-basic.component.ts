import { Component, Input, OnInit } from '@angular/core';
import { ContactModel } from 'src/app/modules/lead/models/contact.model';


@Component({
    selector: 'app-contact-view-basic',
    templateUrl: './contact-view-basic.component.html'
})
export class ContactViewBasicComponent implements OnInit {
    @Input() contact: Array<ContactModel>;
    constructor() {
        this.contact = Array<ContactModel>();
    }
    ngOnInit() {
        console.log(this.contact);
    }
}