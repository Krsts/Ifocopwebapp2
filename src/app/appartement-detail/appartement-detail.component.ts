import { Component, OnInit } from '@angular/core';
import { Appartement } from '../shared/appartement.model';
import { AppartementService } from '../services/appartement.service';



@Component({
  selector: 'app-appartement-detail',
  templateUrl: './appartement-detail.component.html',
  styleUrls: ['./appartement-detail.component.scss']
})
export class AppartementDetailComponent implements OnInit {

  appartements;


  title = 'Title';
  datededepart = Date.now();
  datedefin = Date.now();

  constructor(private appartementService: AppartementService) { }

  ngOnInit() {
    this.appartementService.getAppartementByName({'nom': 'Superbe Appartement'}).subscribe((data: {}) => {
      console.log(data);
      this.appartements = data;
    }, errorCode => console.log(errorCode));
    console.log(this.appartements);
  }
}
