// import { DataService } from './services/Data.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ifocopwebapp2';

  // , private data: DataService
  constructor(private router: Router ) {
  }
  query:string;
  ngOnInit() {
    // this.data.storage = {
    //   "firstname": "Nic",
    //   "lastname": "Raboy",
    //   "event": "this.query"
    // }
    $(document).ready(function()
    {
      console.log("123");
    }
    )}
    searchfetch($event: any) {
      this.query=$event;
      if($event === ""){
      this.router.navigate(['./home'], $event)
    }else{
      this.router.navigate(['./appartement-list'], $event)
    }
    }
}
