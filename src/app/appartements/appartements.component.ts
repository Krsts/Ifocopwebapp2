import { Appartement } from './../shared/appartement.model';
import { AppartementService } from './../services/appartement.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appartements',
  templateUrl: './appartements.component.html',
  styleUrls: ['./appartements.component.scss'],
  providers: [AppartementService]
})
export class AppartementsComponent implements OnInit {
  selectedAppartement: Appartement;
  constructor(private appartementService: AppartementService) { }

  ngOnInit() {
    this.appartementService.appartementSelected.subscribe((appartement: Appartement) => {
      this.selectedAppartement = appartement;
    });
  }

}
