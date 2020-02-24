import { Injectable } from '@angular/core';
declare const require: any;

@Injectable({
    providedIn: 'root'
})
export class ConfigHelper {
    config: any;
    constructor() {
        try {
            this.config = require('../../config.json');
        } catch (err) {
            console.log('Error while reading JSON file');
        }
    }
}
@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    api: any;
    constructor() {
        const _ConfigHelper = new ConfigHelper();
        this.api = _ConfigHelper.config.api;
    }
}