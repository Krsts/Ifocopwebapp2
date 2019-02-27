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
  appartementsList;
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
      this.dataService.setAppartements(this.appartementsList);
    },
      errorCode => console.log(errorCode));
    setInterval(() => {
      try {
        this.filterAppartements();
      } catch { }
    }, Number(this.dataService.getClock()));
  }
}
