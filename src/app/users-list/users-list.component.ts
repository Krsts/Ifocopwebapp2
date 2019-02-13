import { User } from './../shared/user.model';
import { Component, OnInit } from '@angular/core';
import { UserLoggingService } from '../services/user-logging.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  private users: User[];
  private user: User;
  u: any;
  constructor(private userLoggingService: UserLoggingService) { }

  // showUsers() {
  //   for (let i = 0; i < this.users.length; i++) {
  //     console.log('123' + this.users[i].userName);
  //   }
  // }
  showUser(u) {
    if (u.userName.length > 0) {
      return u;
    }
  }

  ngOnInit() {
    this.userLoggingService.getAllUsers().subscribe(data => {
      this.users = data['users'];
    },
      errorCode => console.log(errorCode));
    this.u = this.users.map(obj => {
      const us = {};
      us[obj.userName] = obj.userName;
      us[obj.firstName] = obj.firstName;
      us[obj.email] = obj.email;
      us[obj.password] = obj.password;
      us[obj.address] = obj.address;
      us[obj.name] = obj.name;
      console.log(us);
      return us;
    });
    console.log(this.user);
  }

}

