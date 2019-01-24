import { Appartement } from './../shared/appartement.model';
import { EventEmitter } from '@angular/core';

export class AppartementService {
appartementSelected = new EventEmitter<Appartement>();

private appartement: Appartement[] =  [
    new Appartement('Mon Appartement', 'Paris'),
    new Appartement('Deuxieme Appartement', 'Lyon'),
    new Appartement('Troisieme Appartement', 'Toulouse'),
  ];

  getAppartement() {
      return this.appartement.slice();
  }
}
