import { AppartementJson } from './../shared/appartement-json.model';
// import { Appartement } from './../shared/appartement.model';
// import { AppartementService } from './../services/appartement.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appartements',
  templateUrl: './appartements.component.html',
  styleUrls: ['./appartements.component.scss'],
  
})
export class AppartementsComponent implements OnInit {
appartements: AppartementJson[];
  constructor() { }

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
   }
  





// import { Appartement } from './../shared/appartement.model';
// import { AppartementService } from './../services/appartement.service';
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-appartements',
//   templateUrl: './appartements.component.html',
//   styleUrls: ['./appartements.component.scss'],
//   providers: [AppartementService]
// })
// export class AppartementsComponent implements OnInit {
//   selectedAppartement: Appartement;
//   constructor(private appartementService: AppartementService) { }

//   ngOnInit() {
//     this.appartementService.appartementSelected.subscribe((appartement: Appartement) => {
//       this.selectedAppartement = appartement;
//     });
//   }

// }
