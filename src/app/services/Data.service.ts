import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';


@Injectable()
export class DataService {

    storage: string;
    storageList: string[];

    constructor(private router: Router, private userService: UserService) {
    }

    setStorage(x) {
        this.storage = x;
        this.setList();
    }

    setList() {
        this.storageList = this.storage.split(' ');
        // console.log(`Storage list : ${this.storageList}`);
    }

    filterCommands() {
        if (this.storage !== undefined) {
            if (this.storageList[0] === '') {
                return 'empty search';
            } else if (this.storageList[0] === '!détail') {
                this.router.navigate(['/', 'appartement-detail']);
            } else if (this.storageList[0] === '!list') {
                this.router.navigate(['/', 'appartement-list']);
            } else if (this.storageList[0] === '!setusername') {
                this.userService.setUserName(this.storageList[1]);
            } else if (this.storageList[0] === '!profile') {
                if (this.userService.getStatus()) {
                    try {
                        this.router.navigate(['/', 'user-profile', this.userService.getUserName().toString()]);
                    } catch (Exception) { }
                }
            }
            // else if (this.storageList[0] === '!setuserdata' && this.storageList[2]) {
            //     this.userService.setUserData(this.storageList[1], this.storageList[2]);
            //     console.log(this.userService.getUserData());
            // }
        }
    }
    getStorage() {
        this.filterCommands();
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
