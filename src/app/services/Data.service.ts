import { Router } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable()
export class DataService{

    storage: string;

    constructor(private router: Router) {
    }

    setStorage(x) {
        this.storage = x;
    }
    
    getStorage() {
        if (this.storage === '') {
            return 'empty search';
        } else if (this.storage === '!détail') {
            this.router.navigate(['/', 'appartement-detail']);
            // return this.storage;
            
        } else if (this.storage === '!list') {
            this.router.navigate(['/', 'appartement-list']);
            // return this.storage;
            
        } 
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
