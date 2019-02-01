// import { FilterPipeJson } from './../services/filter-json.pipe';
// import { AppartementsDb } from './../services/appartements.db';
import { Component, OnInit, Output, EventEmitter, ViewChild} from '@angular/core';
import { AppartementListComponent } from '../appartement-list/AppartementListComponent';
import { DataService } from '../services/Data.service';



@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

// appartements = AppartementsDb;
searchinput?: any;

  @Output() search = new EventEmitter<string>();

  @ViewChild(AppartementListComponent)
  private appartementList: AppartementListComponent;

  // callFilter() {
  // console.log(this.searchinput);
  // this.appartementList.filterAppartements(this.searchinput);
  // }

// Call Filter to DataService

// onSearch() {
  //   this.search.emit(this.searchinput);
  // }
  constructor(private dataService: DataService) { }

  onEnter() {
    this.callFilter();
  }

  callFilter() {
    if (this.searchinput !== '') {
    }
    this.dataService.setStorage(this.searchinput);
    console.log(this.dataService.getStorage());
  }

  ngOnInit() {
}

}
