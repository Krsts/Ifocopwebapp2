import { AppartementJson } from './../shared/appartement-json.model';
import { Component, OnInit, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { DataService } from '../services/Data.service';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as $ from 'jquery';
import { Router } from '@angular/router';



@Component({
  selector: 'app-appartement-list',
  templateUrl: './appartement-list.component.html',
  styleUrls: ['./appartement-list.component.scss']
})

export class AppartementListComponent implements OnInit, OnChanges {


  order: string;
  appartements: AppartementJson[];
  appartementsModel: AppartementJson[];
  // constructor(private appartementService: AppartementService) { }



  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) {
    // console.log(JSON.stringify(this.data.storage));
  }

  public searchData = this.dataService.getStorage();

  //   ngOnChanges(changes: SimpleChanges) {
  //     // tslint:disable-next-line:forin
  //     for (const propName in changes) {
  //       const changedProp: SimpleChange = changes[propName];
  //       const newVal = JSON.stringify(changedProp.currentValue);
  //         console.log('changes works');    }}

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('searchData :', this.searchData);
    this.filterAppartements();
  }

  // filterAppartements() {
  //   for (let i = 0; i < this.appartementsModel.length; i++) {
  //     if (this.appartementsModel[i].nom.startsWith(this.dataService.getStorage()) ||
  //       this.appartementsModel[i].ville.startsWith(this.dataService.getStorage()) ) {
  //         this.appartements.push(this.appartementsModel[i]);
  //       console.log(this.appartements);
  //       }
  //   }
  // }


  filterAppartements() {
    // setInterval(() => {
      // console.log(typeof(this.dataService.getStorage()))
      if (this.dataService.getStorage() === undefined){
          this.appartements = this.appartementsModel
      }
      else if (this.dataService.getStorage() === 'empty search') {
        this.appartements = this.appartementsModel
        this.router.navigate(["/", "home"]);
        
      }
      else if (this.dataService.getStorage() !== null) {
        this.appartements = [];
        for (let i = 0; i < this.appartementsModel.length; i++) {
          if (this.appartementsModel[i].nom.toUpperCase().includes(this.dataService.getStorage().toUpperCase()) ||
            this.appartementsModel[i].ville.toUpperCase().includes(this.dataService.getStorage().toUpperCase())) {
            this.appartements.push(this.appartementsModel[i]);
          } else {
            
            // if(this.dataService.getStorage() === "!list"){
            //   this.appartements = this.appartementsModel;
            //   return
            // }
            // else{
            //   this.appartements = [];
            //   return
            // }
          }
          // this.appartements = this.appartementsModel;
        }
      }
    // }, 100);
  }


  searchInput: string;

  // set name(value: string) {
  //     this.critere = value;
  // }

  ngOnInit() {
    // this.appartements = this.appartementService.getAppartement();
    // console.log(this.appartements);
    // console.log(this.appartements)
    this.appartementsModel = [
      {
        nom: 'Mon Appartement',
        ville: 'Paris',
      },
      {
        nom: 'Ton Appartement',
        ville: 'Nantes',
      },
      {
        nom: 'Son Appartement',
        ville: 'Lyon',
      },
      {
        nom: 'Nos Appartements',
        ville: 'Toulouse',
      },
    ];
    this.appartements = [];
setInterval( ()=> {
    // if (this.dataService.getStorage() !== '') {
      this.filterAppartements();
    // } else {
    //   this.appartements = this.appartementsModel;
    //   console.log(typeof (this.appartements));
    //   console.log(this.appartements);
    // }
  }, 100)



    // setInterval(()=> {
    //   this.dataService.getStorage();
    //   this.filterAppartements(); console.log("Interval")
    // }, 1000);


    // console.log(this.route.snapshot.params['order']);
    // this.route.queryParams.subscribe(params => { this.order = params['order']; console.log(`params : ${params}`);

    console.log(this.route.params.subscribe(params => this.order = params["order"]))
    // this.order = params.order;
    console.log(`my order is : ${this.order}`);
    // ( params => this.searchInput=params['searchInput'])
  };
}
    // this.filterAppartements();

  // filterAppartements(searchInput: string) {
    // const critere = this.dataService.getStorage();
    // this.appartements = this.appartementsModel.filter(this.appartementsModel['ville'], critere);
    // console.log(critere);
    // console.log('1232');
