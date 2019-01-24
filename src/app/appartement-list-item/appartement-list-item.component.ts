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

appartements: AppartementJson[];

  // constructor(private appartementService: AppartementService) { }
    constructor () {

    }

  ngOnInit() {
    this.appartements = [
      {
        nom : "Mon Appartement",
        ville : "Paris",
    },
      {
        nom : "Ton Appartement",
        ville : "Nantes",
    },
      {
        nom : "Son Appartement",
        ville : "Lyon",
    },
      {
        nom : "Nos Appartements",
        ville : "Toulouse",
    },
  ]
  }

  // onSelected() {
  //   this.appartementService.appartementSelected.emit(this.appartement);
  // }
}
