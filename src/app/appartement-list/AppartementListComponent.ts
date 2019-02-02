import { AppartementJson } from './../shared/appartement-json.model';
import { Component, OnInit, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { DataService } from '../services/Data.service';


@Component({
  selector: 'app-appartement-list',
  templateUrl: './appartement-list.component.html',
  styleUrls: ['./appartement-list.component.scss']
})

export class AppartementListComponent implements OnInit, OnChanges {

  appartements: AppartementJson[];
  appartementsModel: AppartementJson[];
  // constructor(private appartementService: AppartementService) { }
  constructor(private dataService: DataService) {
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

filterAppartements() {
  for (let i = 0; i < this.appartementsModel.length; i++) {
    // console.log(this.appartementsModel[i]);
    if (this.appartementsModel[i].nom.startsWith(this.dataService.getStorage()) ||
      this.appartementsModel[i].ville.startsWith(this.dataService.getStorage()) ) {
        this.appartements.push(this.appartementsModel[i]);
        // this.appartements[i].ville = this.appartementsModel[i].ville;
      console.log(this.appartements);
      }
    // console.log(this.appartementsModel[i].nom);
  }
}

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

    if (this.dataService.getStorage()) {
        this.filterAppartements();
    } else {
      this.appartements = this.appartementsModel;
      console.log(typeof(this.appartements));
      console.log(this.appartements);
    }


  }
    // this.filterAppartements();

  }

  // filterAppartements(searchInput: string) {
    // const critere = this.dataService.getStorage();
    // this.appartements = this.appartementsModel.filter(this.appartementsModel['ville'], critere);
    // console.log(critere);
    // console.log('1232');
