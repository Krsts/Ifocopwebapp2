import { UserService } from './services/user.service';
import { AppartementListComponent } from './appartement-list/AppartementListComponent';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { DataService } from './services/Data.service';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UserLoggingService } from './services/user-logging.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'DayMeeting';
  query: string;
  // user: string;
  userIcon: string;
  userName: string;
  userLoginForm: FormGroup;

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private dataService: DataService, private userService: UserService, private userLoggingService: UserLoggingService, private formBuilder: FormBuilder) {
    this.createForm();
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterContentChecked(): void {
    this.userName = this.userService.getUserName();
    // console.log(this.userService.getStatus());
    if (this.userService.getStatus() === true) {
      this.userIcon = 'mood';
    } else {
      this.userIcon = 'mood_bad';
    }
  }

  createForm() {
    this.userLoginForm = this.formBuilder.group({
      userName: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(128)
      ]],
      password: ['', [
        Validators.required,
      ]],
    });
  }

  onLoginSubmit() {
    this.VerifyUser(this.userLoginForm.get('userName').value, this.userLoginForm.get('password').value);
  }

  VerifyUser(userName, password) {
    this.userLoggingService.getUserByUserNameAndPassword({ userName, password }).subscribe((data: {}) => {
      console.log(data);
      this.userService.setUserName(data[0].userName);
    }, errorCode => console.log(errorCode));
  }

  // getuserInfo(): string {
  // if (!this.userService.getStatus()) {
  // return 'Bonjour Invité | Se Connecter';
  // } else {
  // return `Bonjour ${this.userData.userName} | Se Déconnecter`;
  // return `Bonjour Framboise | Se Déconnecter`;
  // return `Bonjour ${this.userService.getUserName()} | Se Déconnecter`;
  // }
  // }

  ngOnInit() {
    this.userIcon = 'mood_bad';
    this.userService.setUserName('Gilles');

    $(document).ready(function () {
      console.log('Document ready');

      $('#button').click(function () {
        $('#item').toggle();
      });
    });
  }

  // searchfetch($event: any) {
  //   this.dataService.setStorage($event);
  //   console.log($event);
  //   this.query = $event;
  //   if ($event === '') {
  //   this.router.navigate(['./home'], $event);
  // } else {
  //   this.router.navigate(['./appartement-list'], $event);
  // }
  // }
}
