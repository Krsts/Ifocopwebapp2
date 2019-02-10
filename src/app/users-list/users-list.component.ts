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

  constructor(private userLoggingService: UserLoggingService) { }

  ngOnInit() {
    this.userLoggingService.getAllUsers().subscribe(data => {
      this.users = data['users'];
    },
      errorCode => console.log(errorCode));
  }
}
