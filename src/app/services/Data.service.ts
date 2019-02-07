import { Router } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable()
export class DataService {

    storage: string;
    storageList: string[];

    constructor(private router: Router) {
    }

    setStorage(x) {
        this.storage = x;
        this.setList();
    }

    setList() {
        this.storageList = this.storage.split(' ');
        console.log(`Straoge list : ${this.storageList}`);
    }

    navigate() {
        if (this.storage !== undefined) {
            if (this.storageList[0] === '') {
                return 'empty search';
            } else if (this.storageList[0] === '!détail') {
                this.router.navigate(['/', 'appartement-detail']);
            } else if (this.storageList[0] === '!list') {
                this.router.navigate(['/', 'appartement-list']);
            }
        }
    }
    getStorage() {
        this.navigate();
        // this.setStorage('empty search');
        return this.storage;
    }


    getStorageLength(): number {
        if (typeof (this.storage) === 'string') {
            return this.storage.length;
        } else {
            return 0;
        }
    }

}
