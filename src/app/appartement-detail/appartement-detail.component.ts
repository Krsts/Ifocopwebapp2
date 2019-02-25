import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Appartement } from '../shared/appartement.model';
import { AppartementService } from '../services/appartement.service';



@Component({
  selector: 'app-appartement-detail',
  templateUrl: './appartement-detail.component.html',
  styleUrls: ['./appartement-detail.component.scss']
})
export class AppartementDetailComponent implements OnInit {

  appartement;


  title = 'Title';
  datededepart = Date.now();
  datedefin = Date.now();
  name;

  constructor(private appartementService: AppartementService, private route: ActivatedRoute, private router : Router) { }

  onReserver(){
    this.router.navigate(['/', 'paiement'])
  }

  ngOnInit() {
    this.route.params
      // tslint:disable-next-line:max-line-length
      .subscribe(name => { console.log(name); this.name = name['name']; }, errorCode => console.log(errorCode));
    // tslint:disable-next-line:max-line-length
    try {
      this.appartementService.getAppartementByName({ 'nom': this.name }).subscribe((data: {}) => {
        console.log(data);
        this.appartement = data[0];
      }, errorCode => console.log(errorCode));
      console.log(this.appartement);
    } catch { }
  }
}

