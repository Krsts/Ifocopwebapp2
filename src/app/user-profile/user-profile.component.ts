import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { UserLoggingService } from '../services/user-logging.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../shared/user.model';

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
  id: string;
  userChecker: string;


  uSerFOrm = new FormGroup({
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
      userName: this.uSerFOrm.get('userName').value,
      name: this.uSerFOrm.get('name').value,
      firstName: this.uSerFOrm.get('firstName').value,
      address: this.uSerFOrm.get('address').value,
      email: this.uSerFOrm.get('email').value,
      phone: this.uSerFOrm.get('phone').value,
      password: this.uSerFOrm.get('password').value
    };
  }
  EditMode() {
    return this.edit = !this.edit;
  }
  updateCustomer() {
    this.userLoggingService.getUserByUserName({ 'userName': this.userChecker }).subscribe(data => {
      console.log('data :' + data);
      this.id = data['_id'];
    }, error => console.log(error));
    if (this.user.userName.length > 0) {
      this.userLoggingService.updateUser(this.user, this.id).subscribe((res) => {
        console.log('Updated the customer');
        this.router.navigate(['/', 'home']);
      }, errorCode => console.log(errorCode));
    } console.log('userName Empty');
  }

  // tslint:disable-next-line:max-line-length
  constructor(private userLoggingService: UserLoggingService, private userService: UserService, private router: Router, private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.userChecker = this.userService.getUserName();
    console.log(this.userChecker);
    this.route.params
      // tslint:disable-next-line:max-line-length
      .subscribe(userName => { console.log(userName); this.userChecker = userName['userName']; }, errorCode => console.log(errorCode));

    if (!this.userService.getStatus()) {
      this.router.navigate(['/', 'home']);
    } else {
      console.log('userChecker : ' + this.userChecker);
      this.userLoggingService.getUserByUserName({ 'userName': this.userChecker.toString() }).subscribe(data => {
        console.log(data[0]);
        this.user = data[0];
        console.log('this.user : ' + this.user);
        this.id = this.user._id;
        this.userName = this.user.userName;
        this.name = this.user.name;
        this.firstName = this.user.firstName;
        this.address = this.user.address;
        this.email = this.user.email;
        this.phone = this.user.phone;
        this.password = this.user.password;

        console.log(this.userName);
        console.log(this.phone);
      },
        errorCode => console.log(errorCode));
    }
  }
}



