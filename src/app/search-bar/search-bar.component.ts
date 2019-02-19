// import { FilterPipeJson } from './../services/filter-json.pipe';
// import { AppartementsDb } from './../services/appartements.db';
import { Component, OnInit, Output, EventEmitter, ViewChild, AfterViewChecked } from '@angular/core';
import { AppartementListComponent } from '../appartement-list/AppartementListComponent';
import { DataService } from '../services/Data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  searchinput: string;
  constructor(private dataService: DataService, private router: Router) { }
  onEnter() {
    this.callFilter();
  }
  callFilter() {
    {
      this.dataService.setStorage(this.searchinput);
      if (this.dataService.getStorage() === '') {
        this.router.navigate(['/', 'home']);
      } else {
        this.router.navigate(['/', 'appartement-list']);
      }
    }
  }
  ngOnInit() {
    this.searchinput = '';
  }

}
