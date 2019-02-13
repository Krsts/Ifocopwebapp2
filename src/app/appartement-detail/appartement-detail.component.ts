import { Component, OnInit } from '@angular/core';
import { Appartement } from '../shared/appartement.model';
import { AppartementService } from '../services/appartement.service';



@Component({
  selector: 'app-appartement-detail',
  templateUrl: './appartement-detail.component.html',
  styleUrls: ['./appartement-detail.component.scss']
})
export class AppartementDetailComponent implements OnInit {

  appartements: Appartement[];


  title = 'Title';
  datededepart = Date.now();
  datedefin = Date.now();

  constructor(private appartementService: AppartementService) { }

  ngOnInit() {
    this.appartementService.getAllappartements();
    console.log(this.appartements);
  }
}
