import { AppartementJson } from './../shared/appartement-json.model';
// import { AppartementService } from './../services/appartement.service';
// import { Appartement } from './../shared/appartement.model';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-appartement-list-item',
  templateUrl: './appartement-list-item.component.html',
  styleUrls: ['./appartement-list-item.component.scss']
})
export class AppartementListItemComponent implements OnInit, OnChanges {
// @Input() appartement: Appartement;

// @Input() appartement: AppartementJson[];
@Input() appartement: any;

  // constructor(private appartementService: AppartementService) { }
    constructor () {}



  public ngOnChanges(changes: SimpleChanges): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    console.log('ngOnChanges Handler');

  }

  ngOnInit() {
  }


  // alternatecolor() {
  //   this.colorSwitch = !this.colorSwitch;
  //   if (this.colorSwitch === false) {
  //     this.colorSwitch = !this.colorSwitch;
  //   return "#FE4B74";}
  //   else{
  //     this.colorSwitch = !this.colorSwitch;
  //     return "green";}
  // }
  // onSelected() {
  //   this.appartementService.appartementSelected.emit(this.appartement);
  // }
}
