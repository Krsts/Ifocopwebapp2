import { Component, OnInit } from '@angular/core';
import {Appartement } from '../shared/appartement.model';
import { AppartementService } from '../services/appartement.service';

@Component({
  selector: 'app-appartement-list',
  templateUrl: './appartement-list.component.html',
  styleUrls: ['./appartement-list.component.scss']
})
export class AppartementListComponent implements OnInit {
  appartements: Appartement[];

  AppartementTitle: string;

  constructor(private appartementService: AppartementService) { }

  ngOnInit() {
    this.appartements = this.appartementService.getAppartement();
    console.log(this.appartements);
  }
}
