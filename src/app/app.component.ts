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
  reservations: Array<String>;
  user;

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private dataService: DataService, private userService: UserService, private userLoggingService: UserLoggingService, private formBuilder: FormBuilder) {
    this.createForm();
  }

  onDeleteRes(i) {
    this.reservations.splice(i, 1);
  }
  updateCart() {
    try {
      this.userLoggingService.getUserByUserName({ 'userName': this.userService.getUserName() }).subscribe((data: {}) => {
        this.user = data[0];
        // {
        // '_id': data['_id'],
        // 'userName': data['userName'],
        // 'name': data['name'],
        // 'firstName': data['firstName'],
        // 'address': data['address'],
        // 'email': data['email'],
        // 'phone': data['phone'],
        // 'password': data['password'],
        // 'reservations': this.userService.getLocalCart()
        // };
        this.user['reservations'] = this.userService.getLocalCart();
        console.log('data : ' + JSON.stringify(data));
        console.log('_id : ', this.user['_id']);
        console.log('this.user : ' + JSON.stringify(this.user));
      }, errorCode => console.log(errorCode),
      ); this.userLoggingService.updateUser(this.user, this.user['_id']).subscribe((res) => {
        console.log('Updated customer');
      });
    } catch { }
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterContentChecked(): void {
    this.userName = this.userService.getUserName();
    // console.log(this.userService.getStatus());
    // console.log(this.reservations);
    if (this.userService.getStatus() === true) {
      this.userIcon = 'mood';
      this.reservations = this.userService.getLocalCart();
    } else {
      this.userIcon = 'mood_bad';
      this.userService.clearLocalCart();
    }
  }

  clearStorage() {
    this.dataService.clearStorage();
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
      // console.log('verified data : ' + JSON.stringify(data));
      // console.log(data[0].reservations);
      this.reservations = data[0].reservations;
      this.userService.setLocalCart(this.reservations);
      console.log(this.reservations);
      // for (let i = 0; i < this.data[0].reservations.length; i++) {
      //   this.userService.addToLocalCart(this.data[0].reservations[i]);
      //   this.reservations.push(this.data[0].reservations[i]);
      // }

      try {
        if (data[0].userName.length > 0) {
          this.userService.setUserName(data[0].userName);

          //   for (let i = 0; i< this.data[0].reservations.length; i++){
          //   this.userService.addToLocalCart(this.data[0].reservations[i]);
          //   this.reservations.push(this.data[0].reservations[i]);
          // }
          //   console.log("Reservations : " + this.reservations);
        } else { }
      } catch { }
    }, errorCode => console.log('errorCode'));
  }

  ngOnInit() {
    this.userIcon = 'mood_bad';
    this.dataService.setClock(1000);
    // this.userService.setUserName('Gilles');

    //   $(document).ready(function () {
    //     console.log('Document ready');

    //     $('#button').click(function () {
    //       $('#item').toggle();
    //     });
    //   });
    // }

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
}
