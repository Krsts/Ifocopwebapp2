import { UserLoggingService } from './../services/user-logging.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { User } from '../shared/user.model';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-user-sign-up',
    templateUrl: './user-sign-up.component.html',
    styleUrls: ['./user-sign-up.component.scss']
})
export class UserSignUpComponent implements OnInit {

    posts: any;

    constructor(private userLoggingService: UserLoggingService, http: HttpClient) {
        // http.get('https://jsonplaceholder.typicode.com/posts')
        //     .subscribe(
        //         (response) => {
        //             this.posts = response;
        //         },
        //         (error) => console.log(error));
    }
    // userForm: FormGroup;
    user: User;
    // userName: FormControl;
    // email: FormControl;
    // password: FormControl;

    onSubmit() {
        this.userLoggingService.addUser(this.user)
            .subscribe(
                (response) =>
                    console.log(response),
                (error) => console.log(error));
    }
    ngOnInit() {
        //
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
