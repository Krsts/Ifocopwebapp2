import { UserService } from './../services/user.service';
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

  private userS;
  private user;
  constructor(private userLoggingService: UserLoggingService, private http: HttpClient, private userService: UserService) { }

  ngOnInit() {
    //
    this.userLoggingService.getAllUsers().subscribe((data: {}) => {
      this.userS = data;
      console.log(data);
    },
      errorCode => console.log(errorCode));
  }
}

