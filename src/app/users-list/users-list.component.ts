import { HttpClient } from '@angular/common/http';
import { User } from './../shared/user.model';
import { Component, OnInit } from '@angular/core';
import { UserLoggingService } from '../services/user-logging.service';
import { Observable } from 'rxjs';
import * as _ from 'lodash';



@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  private users;
  private user;
  constructor(private userLoggingService: UserLoggingService, private http: HttpClient) { }



  ngOnInit() {
    //
    this.userLoggingService.getAllUsers().subscribe((data: {}) => {
      this.users = data;
      console.log(data);
    },
      errorCode => console.log(errorCode));
    //
    this.userLoggingService.getUserByUserNameAndPassword({ 'userName': 'azd', 'password': 'zef' }).subscribe((data: {}) => {
      this.user = data;
      console.log(data);
    }, errorCode => console.log(errorCode));
  }

}

  // showUsers() {
  //   for (let i = 0; i < this.users.length; i++) {
  //     console.log('123' + this.users[i].userName);
  //   }
  // }
