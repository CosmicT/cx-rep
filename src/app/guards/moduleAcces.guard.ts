import { Injectable } from '@angular/core';
import { CanLoad, UrlSegment, Route } from '@angular/router';


@Injectable()
export class ModuleAccessGuard implements CanLoad {

    constructor() { }
    canLoad(route: Route, segments: UrlSegment[]): Promise<boolean> | boolean {
        // console.log(segments);
        return true;
    }
}