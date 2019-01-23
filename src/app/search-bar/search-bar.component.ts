import { Component, OnInit } from '@angular/core';
// import { request } from 'http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {


  search: string;

  onsearchrequest(event: any) {
    this.search += event.target.value + ' | ';
    console.log(this.search);
  }
  // searchrequest($event) {
  //     return ($event.text);
  // }

  constructor() { }

  ngOnInit() {
  }

}
