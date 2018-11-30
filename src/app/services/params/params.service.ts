import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Param {
    private _params;

    set params(p) {
        this._params = p;
    }

    get params() {
        const tmp = this._params;
        this._params = undefined;
        return tmp;
    }

}