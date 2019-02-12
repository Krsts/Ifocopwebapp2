import { User } from './../shared/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserLoggingService {

  // Typage! ?????????????????????????????????????????!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  baseUrl = 'http://localhost:3000/users-list';
  private users: User[];
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  findAll(): User[] {
    return this.users;
  }
  find(userName: string): User {
    return this.users[this.getSelectedIndex(userName)];
  }
  private getSelectedIndex(userName: string) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].userName === userName) {
        return i;
      }
    }
    return -1;
  }
  addUser(user: User) {
    return this.http.post(this.baseUrl, user);
  }
}
