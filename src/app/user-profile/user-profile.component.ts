import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { UserLoggingService } from '../services/user-logging.service';
import { Router, ActivatedRoute } from '@angular/router';


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

  userChecker: string;
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

