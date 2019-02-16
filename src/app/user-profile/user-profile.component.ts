import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { UserLoggingService } from '../services/user-logging.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userName: string;
  user;
  name: string;
  firstName: string;
  address: string;
  email: string;
  password: string;
  phone: string;

  constructor(private userLoggingService: UserLoggingService, private userService: UserService, private router: Router) {
  }
  ngOnInit() {
    if (!this.userService.getStatus()) {
      this.router.navigate(['/', 'home']);
    } else {
      this.userLoggingService.getUserByUserName({ 'userName': this.userService.getUserName() }).subscribe(data => {
        console.log(data);
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

  }

}

