import { AppartementJson } from './../shared/appartement-json.model';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/Data.service';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { AppartementService } from '../services/appartement.service';



@Component({
  selector: 'app-appartement-list',
  templateUrl: './appartement-list.component.html',
  styleUrls: ['./appartement-list.component.scss']
})
export class AppartementListComponent implements OnInit {
  searchInput: string;
  order: string;
  appartements: AppartementJson[];
  clock: Number;
  // appartementsList: AppartementJson[];
  appartementsList;
  // constructor(private appartementService: AppartementService) { }
  // tslint:disable-next-line:max-line-length
  constructor(private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private appartementService: AppartementService, ) {
  }
  public searchData = this.dataService.getStorage();

  filterAppartements() {
    if (this.dataService.getStorage() === undefined) {
      this.appartements = this.appartementsList;
    } else if (this.dataService.getStorage() === '!list') {
      this.appartements = this.appartementsList;
      this.router.navigate(['/', 'appartement-list']);
    } else if (this.dataService.getStorage() === 'empty search') {
      this.appartements = this.appartementsList;
      // this.router.url === '/appartement-list'
      // if (this.router.url === '/appartement-list'){
      this.router.navigate(['/', 'home']);
    } else if (this.dataService.getStorage() !== null) {
      this.appartements = []; {
        for (let i = 0; i < this.appartementsList.length; i++) {
          if (this.appartementsList[i].nom.toUpperCase().includes(this.dataService.getStorage().toUpperCase()) ||
            this.appartementsList[i].ville.toUpperCase().includes(this.dataService.getStorage().toUpperCase()) ||
            this.appartementsList[i].codePostal.toUpperCase().includes(this.dataService.getStorage().toUpperCase()) ||
            this.appartementsList[i].adresse.toUpperCase().includes(this.dataService.getStorage().toUpperCase()) ||
            this.appartementsList[i]['nombre_de_pièces'].toUpperCase().includes(this.dataService.getStorage().toUpperCase()) ||
            this.appartementsList[i]['capacité'].toUpperCase().includes(this.dataService.getStorage().toUpperCase())
          ) {
            this.appartements.push(this.appartementsList[i]);
          } else {
          }
        }
      }
    }
  }

  ngOnInit() {
    this.appartementService.getAllappartements().subscribe((data: {}) => {
      this.appartementsList = data['appartements'];

    },
      errorCode => console.log(errorCode));

    // this.appartements = this.appartementsList;

    // this.appartementsList = [
    //   {
    //     nom: 'Mon Appartement',
    //     ville: 'Paris',
    //   },
    //   {
    //     nom: 'Ton Appartement',
    //     ville: 'Nantes',
    //   },
    //   {
    //     nom: 'Son Appartement',
    //     ville: 'Lyon',
    //   },
    //   {
    //     nom: 'Nos Appartements',
    //     ville: 'Toulouse',
    //   },
    // ];
    // this.appartements = [];
    setInterval(() => {
      // if (this.dataService.getStorage() !== '') {
      try {
        this.filterAppartements();
      } catch { }
      // } else {
      //   this.appartements = this.appartementsList;
      //   console.log(typeof (this.appartements));
      //   console.log(this.appartements);
      // }
    }, Number(this.dataService.getClock()));



    // setInterval(()=> {
    //   this.dataService.getStorage();
    //   this.filterAppartements(); console.log('Interval')
    // }, 1000);


    // console.log(this.route.snapshot.params['order']);
    // this.route.queryParams.subscribe(params => { this.order = params['order']; console.log(`params : ${params}`);

    // console.log(this.route.params.subscribe(params => this.order = params['order']));
    // this.order = params.order;
    // console.log(`my order is : ${this.order}`);
    // ( params => this.searchInput=params['searchInput'])
  }
}
