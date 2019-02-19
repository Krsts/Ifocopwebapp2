import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { UserLoggingService } from '../services/user-logging.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  edit = false;
  userName: string;
  user;
  name: string;
  firstName: string;
  address: string;
  email: string;
  password: string;
  phone: string;

  userChecker: string;
  userForm = new FormGroup({
    userName: new FormControl(this.userName, [Validators.required, Validators.minLength(3)]),
    name: new FormControl(this.name, [Validators.required, Validators.minLength(1)]),
    firstName: new FormControl(this.firstName, [Validators.minLength(3)]),
    address: new FormControl(this.address, [Validators.minLength(5)]),
    email: new FormControl(this.email, [Validators.required, Validators.email]),
    phone: new FormControl(this.phone),
    password: new FormControl(this.password, [Validators.required])
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
    this.userLoggingService.changeUserData({ userName: this.user['userName'], user: this.user }).subscribe(data => {
      console.log(JSON.stringify(data));
    }, errorCode => (console.log(errorCode)));
  }
  // if (data.length > 0) {
  //   window.alert('Nom d\'utilisateur déjà existant');
  // } else {
  //   this.userLoggingService.addUser(this.user)
  // .subscribe(
  // (response: {}) => (console.log(response),
  // this.router.navigate(['/', 'users-list'])),
  // (error) => console.log(error));
  // this.userService.setUserName(this.user.userName);

  // }, errorCode => console.log(errorCode));


  //

  EditMode() {
    return this.edit = !this.edit;
  }

  // tslint:disable-next-line:max-line-length
  constructor(private userLoggingService: UserLoggingService, private userService: UserService, private router: Router, private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.userChecker = this.userService.getUserName();
    console.log(this.userChecker)
    this.route.params
      // tslint:disable-next-line:max-line-length
      .subscribe(userName => { console.log(userName); this.userChecker = userName['userName']; }, errorCode => console.log(errorCode));

    if (!this.userService.getStatus()) {
      this.router.navigate(['/', 'home']);
    } else {
      console.log('userChecker : ' + this.userChecker);
      this.userLoggingService.getUserByUserName({ 'userName': this.userChecker }).subscribe(data => {
        // console.log('data : ' + JSON.stringify(data[0]));
        this.user = data[0];
        this.userName = this.userService.getUserName();
        this.name = this.user.name;
        this.firstName = this.user.firstName;
        this.address = this.user.address;
        this.email = this.user.email;
        this.phone = this.user.phone;
        this.password = this.user.password;
      },
        errorCode => console.log(errorCode));
    }
    this.userLoggingService.changeUserData({ userName: this.user['userName'], user: this.user }).subscribe(data => {
      console.log('data');
    }, errorCode => (console.log(errorCode)));
  }
}



