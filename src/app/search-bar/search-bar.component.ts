import { FilterPipeJson } from './../services/filter-json.pipe';
import { AppartementsDb } from './../services/appartements.db';
import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

// appartements = AppartementsDb;
searchinput:string = '';

  @Output() search= new EventEmitter<string>();
  
  onSearch(){
    this.search.emit(this.searchinput);
  }
  // onsearchrequest(event: any) {
  //   this.search += event.target.value + ' | ';
  //   console.log(this.search);
  // }
  constructor() { }

  ngOnInit() {
}
}
  // searchrequest($event) {
  //     return ($event.text);
  // }