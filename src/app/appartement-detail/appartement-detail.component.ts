import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appartement-detail',
  templateUrl: './appartement-detail.component.html',
  styleUrls: ['./appartement-detail.component.scss']
})
export class AppartementDetailComponent implements OnInit {

  title = 'Title';
  datededepart = Date.now();
  datedefin = Date.now();

  constructor() { }

  ngOnInit() {
  }

}
