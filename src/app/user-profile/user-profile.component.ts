import { Component, OnInit } from '@angular/core';
import { UserLoggingService } from '../services/user-logging.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private userLoggingService: UserLoggingService) {

  }

  userProfileInfo = this.userLoggingService.getAllUsers();

  ngOnInit() {
    console.log(this.userProfileInfo);
  }
}
