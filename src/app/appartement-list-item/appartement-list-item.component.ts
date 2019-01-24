import { AppartementJson } from './../shared/appartement-json.model';
// import { AppartementService } from './../services/appartement.service';
// import { Appartement } from './../shared/appartement.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appartement-list-item',
  templateUrl: './appartement-list-item.component.html',
  styleUrls: ['./appartement-list-item.component.scss']
})
export class AppartementListItemComponent implements OnInit {
// @Input() appartement: Appartement;

@Input() appartement: AppartementJson[];


  // constructor(private appartementService: AppartementService) { }
    constructor () {}

  ngOnInit() {
    
  }

  // onSelected() {
  //   this.appartementService.appartementSelected.emit(this.appartement);
  // }
}
