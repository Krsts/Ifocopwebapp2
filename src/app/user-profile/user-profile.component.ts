import { Component, OnInit } from '@angular/core';
import { UserLoggingService } from '../services/user-logging.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private userLoggingService: UserLoggingService) {

  }

user: User;

  userProfileInfo = this.userLoggingService.getAllUsers();
  // userInfo = this.userLoggingService.getuser('Babar');

  ngOnInit() {
    this.user.userName = 'YoloCall';
    this.user.password = 'mdp';
    console.log(this.userProfileInfo);
    // console.log(this.userLoggingService.getuser(this.user));
    // console.log(this.userInfo);
  }
}
