// import { DataService } from './services/Data.service';
import { UserService } from './services/user.service';
import { AppartementListComponent } from './appartement-list/AppartementListComponent';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { DataService } from './services/Data.service';
import { SelectControlValueAccessor } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'DayMeeting';
  query: string;
  user: string;
  userIcon: string;

  // , private data: DataService
  constructor(private router: Router, private dataService: DataService, private userService: UserService) {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterContentChecked(): void {

      if (this.userService.getLoginStatus() === 'connecté') {
        this.userIcon = 'mood';
      } else {
        this.userIcon = 'mood_bad';
      }
  }



  // getConnectionStatus(): string {
  //   if (this.userService.getLoginStatus() === 'connecté') {
  //     this.userIcon = 'mood';
  //   } else {
  //     this.userIcon = 'mood_bad';
  //   }
  //   return this.userService.getLoginStatus();
  // }

  getuserInfo(): string {
    if (!this.userService.getStatus()) {
      return 'Bonjour Invité | Se Connecter';

    } else {
      return `Bonjour ${this.user} | Se Déconnecter`;
    }

  }

  // setList(v?: string) {
  //   if (v) {
  //     this.dataService.setStorage(v);
  //   } else {
  //     this.dataService.setStorage('!list');
  //   }
  // }


  ngOnInit() {
    this.userIcon = 'mood_bad';
    this.user = 'Bertrand';
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
