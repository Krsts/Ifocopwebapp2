import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

    storage: string;

    constructor() {
    }

    setStorage(x) {
        this.storage = x;
    }
    getStorage() {
        return this.storage;
    }
}
