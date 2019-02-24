import { UserLoggingService } from './../services/user-logging.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { User } from '../shared/user.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';




@Component({
    selector: 'app-user-sign-up',
    templateUrl: './user-sign-up.component.html',
    styleUrls: ['./user-sign-up.component.scss']
})
export class UserSignUpComponent implements OnInit {
    // tslint:disable-next-line:max-line-length
    constructor(private userLoggingService: UserLoggingService, http: HttpClient, private router: Router, private userService: UserService) {
    }
    user: User;

    userForm = new FormGroup({
        userName: new FormControl('', [Validators.required, Validators.minLength(3)]),
        name: new FormControl('', [Validators.required, Validators.minLength(1)]),
        firstName: new FormControl('', [Validators.minLength(3)]),
        address: new FormControl(),
        email: new FormControl('', [Validators.required, Validators.email]),
        phone: new FormControl(),
        password: new FormControl('', [Validators.required]),
        confirmPassword: new FormControl('', [Validators.required])
    });


    onFormSubmit() {
        this.user = {
            userName: this.userForm.get('userName').value,
            name: this.userForm.get('name').value,
            firstName: this.userForm.get('firstName').value,
            address: this.userForm.get('address').value,
            email: this.userForm.get('email').value,
            phone: this.userForm.get('phone').value,
            password: this.userForm.get('password').value
        };
        this.userLoggingService.getUserByUserName({ 'userName': this.user.userName }).subscribe(data => {
            console.log(data);
            if (data.length > 0) {
                window.alert('Nom d\'utilisateur déjà existant');
            } else {
                this.userLoggingService.addUser(this.user)
                    .subscribe(
                        (response: {}) => (console.log(response),
                            this.router.navigate(['/', 'users-list'])),
                        (error) => console.log(error));
                this.userService.setUserName(this.user.userName);
            }
        }, errorCode => console.log(errorCode));
    }
    ngOnInit() {

        this.user = {
            userName: 'Babar',
            name: 'Durand',
            firstName: 'Bertrand',
            address: '123 soleil',
            email: '456@mail.com',
            phone: '1234590',
            password: 'secretstory',
        };
    }
}
