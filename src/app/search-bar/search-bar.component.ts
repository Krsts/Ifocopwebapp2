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

  // appartements = AppartementsDb;
  searchinput?: string;

  // ngAfterViewChecked(): void {
    // Called after every check of the component's view. Applies to components only.
    // Add 'implements AfterViewChecked' to the class.
    // this.appartementList.filterAppartements();
  // }

  // @Output()
  // search = new EventEmitter<string>();

  // @ViewChild(AppartementListComponent)
  // private appartementList: AppartementListComponent;

  // callFilter() {
  // console.log(this.searchinput);
  // this.appartementList.filterAppartements(this.searchinput);
  // }

  // Call Filter to DataService

  // onSearch() {
  //   this.search.emit(this.searchinput);
  // }
  constructor(private dataService: DataService, private router: Router) { }

  onEnter() {
    this.callFilter();
    // this.router.navigate(['/', 'appartement-list'], { queryParams: { order: this.dataService.getStorage() } })
    //     this.router.navigateByUrl('/appartement-list', {skipLocationChange: true}).then(()=>
    // this.router.navigate(["/", "appartement-list"]));
  }


  callFilter() {
    if (this.searchinput !== 'empty search') {
      this.dataService.setStorage(this.searchinput);
      // this.router.navigateByUrl('/appartement-list', {skipLocationChange: true}).then(()=>
      // this.router.navigate(["/", "appartement-list"]));
      this.router.navigate(['/', 'appartement-list']);
      // console.log(`callFilter getStorage() : ${this.dataService.getStorage()}`);
    } else {
      // console.log("empty search bar !")
    }
  }

  ngOnInit() {
    this.searchinput = '';
  }

}
