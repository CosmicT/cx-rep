import { Directive, Output, EventEmitter, ElementRef, OnInit } from '@angular/core';
import { GooglePlaceModel } from '../models/google-place.model';
declare const google: any;
@Directive({
    selector: '[appGooglePlaces]'
})
export class GooglePlaceDirective implements OnInit {

    @Output() selected: EventEmitter<GooglePlaceModel>;
    private element: HTMLInputElement;
    constructor(
        private _ElementRef: ElementRef
    ) {
        this.element = this._ElementRef.nativeElement;
        this.selected = new EventEmitter();
    }
    ngOnInit() {
        const autocomplete = new google.maps.places.Autocomplete(this.element);
        google.maps.event.addListener(autocomplete, 'place_changed', () => {
            const place = autocomplete.getPlace();
            console.log('place', place);
            const googlePlace: GooglePlaceModel = {
                name: place.name,
                formattedAddress: place.formatted_address,
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng()
            };
            this.selected.emit(googlePlace);
            (this.element as HTMLInputElement).value = '';
        });
    }
}