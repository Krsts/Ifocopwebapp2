import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { UserLoggingService } from './user-logging.service';


@Injectable()
export class DataService {

    storage: string;
    storageList: string[];
    enterKey: boolean;
    clock: Number;

    constructor(private router: Router,
        private userService: UserService,
        private userLoggingService: UserLoggingService) {
    }

    setStorage(x) {
        this.storage = x;
        this.setList();
    }
    setClock(v: Number) {
        this.clock = v;
    }
    getClock() {
        return this.clock;
    }

    setList() {
        this.storageList = this.storage.split(' ');
        // console.log(`Storage list : ${this.storageList}`);
        console.log(this.storageList);
    }

    clearStorage() {
        this.storage = '';
        this.storageList = [];
    }
    filterCommands() {

        if (this.storage !== undefined) {
            try {
                if (this.storageList[0] === '') {
                    return 'empty search';
                    // tslint:disable-next-line:max-line-length
                } else if (this.storageList[0] === '' && this.enterKey) {
                    this.router.navigate(['/', 'home']);
                } else if (this.storageList[0] === '!clock' && this.storageList[1] !== '' && this.storageList[2] === '!s') {
                    // tslint:disable-next-line:max-line-length
                    if (Number(this.storageList[1]) > 100) {
                        // tslint:disable-next-line:max-line-length
                        this.setClock(Number(this.storageList[1])); console.log('clock updated : ' + this.getClock() + ' ms'); this.storage = '';
                        this.storageList = [];
                    }
                    // tslint:disable-next-line:max-line-length
                } else if (this.storageList[0] === '!détail' && this.userService.getLocalCart().length > 0 && this.storageList.length === 2 && this.storageList[1] !== '') {
                    this.router.navigate(['/', 'appartement-detail', this.userService.getLocalCart()[Number(this.storageList[1])]]);
                } else if (this.storageList[0] === '!list') {
                    this.router.navigate(['/', 'appartement-list']);
                } else if (this.storageList[0] === '!users') {
                    // if (this.userService.getStatus()) {
                    this.router.navigate(['/', 'users-list']);
                    // }
                } else if (this.storageList[0] === '!loggout' && this.userService.getStatus()) {
                    this.userService.setUserName(undefined);
                } else if (this.storageList[0] === '!setusername') {
                    this.userService.setUserName(this.storageList[1]);
                    // tslint:disable-next-line:max-line-length
                } else if (this.storageList[0] === '!u' && this.storageList[2] === '!p' && this.storageList[1] !== '' && this.storageList[3] !== '' && this.storageList[4] === '!s') {
                    // tslint:disable-next-line:max-line-length
                    this.userLoggingService.getUserByUserNameAndPassword({ 'userName': this.storageList[1].toString(), 'password': this.storageList[3].toString() }).subscribe((data: {}) => {
                        console.log(data); try {
                            if (data[0].userName.length > 0) {
                                this.userService.setUserName(data[0].userName);
                                this.userService.setLocalCart(data[0].reservations);
                                this.storage = '';
                                this.storageList = [];
                            }
                        } catch {
                            console.log('error error');
                            this.storage = '';
                            this.storageList = [];
                        }
                    },
                        // errorCode => console.log(errorCode)
                    );

                } else if (this.storageList[0] === '!profile') {
                    if (this.userService.getStatus()) {
                        this.router.navigate(['/', 'user-profile', this.userService.getUserName().toString()]);
                    }
                }
            } catch (Exception) { console.log(Exception); }
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
