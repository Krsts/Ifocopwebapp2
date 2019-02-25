import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.scss']
})
export class PaiementComponent implements OnInit {

  paiement = false;

  onPaiement() {
    return this.paiement = true;
  }
  constructor() { }

  ngOnInit() {
  }

}
