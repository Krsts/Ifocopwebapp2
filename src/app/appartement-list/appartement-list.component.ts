// import { DataService } from './../services/Data.service';
import { AppartementJson } from './../shared/appartement-json.model';
import { Component, OnInit } from '@angular/core';

// import {Appartement } from '../shared/appartement.model';
// import { AppartementService } from '../services/appartement.service';


@Component({
  selector: 'app-appartement-list',
  templateUrl: './appartement-list.component.html',
  styleUrls: ['./appartement-list.component.scss']
})
export class AppartementListComponent implements OnInit {
  // appartements: Appartement[];

  // AppartementTitle: string;
  // langs: string[] = [
  //   'English',
  //   'French',
  //   'German',
  // ]

appartements:AppartementJson[];

  // constructor(private appartementService: AppartementService) { }
  constructor() { 
    // console.log(JSON.stringify(this.data.storage));
  }

  ngOnInit() {
    // this.appartements = this.appartementService.getAppartement();
    // console.log(this.appartements);
    // console.log(this.appartements)
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
  
}
