// import { DataService } from './services/Data.service';
import { AppartementListComponent } from './appartement-list/AppartementListComponent';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { DataService } from './services/Data.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ifocopwebapp2';
  query: string;

  // , private data: DataService
  constructor(private router: Router, private dataService: DataService ) {
  }

  ngOnInit() {

    $(document).ready(function() {
      console.log('Document ready');
    }); }

    searchfetch($event: any) {
      this.dataService.setStorage($event);
      console.log($event);
      this.query = $event;
      if ($event === '') {
      this.router.navigate(['./home'], $event);
    } else {
      this.router.navigate(['./appartement-list'], $event);
    }
    }
}
