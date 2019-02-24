import { ActivatedRoute } from '@angular/router';
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
  name;

  constructor(private appartementService: AppartementService, private route: ActivatedRoute) { }



  ngOnInit() {
    this.route.params
      // tslint:disable-next-line:max-line-length
      .subscribe(name => { console.log(name); this.name = name; }, errorCode => console.log(errorCode));
    this.appartementService.getAppartementByName({ 'nom': this.name.toString() }).subscribe((data: {}) => {
      console.log(data);
      this.appartements = data;
    }, errorCode => console.log(errorCode));
    console.log(this.appartements);
  }
}

