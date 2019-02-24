import { UserService } from './../services/user.service';
import { AppartementJson } from './../shared/appartement-json.model';
// import { AppartementService } from './../services/appartement.service';
// import { Appartement } from './../shared/appartement.model';
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-appartement-list-item',
  templateUrl: './appartement-list-item.component.html',
  styleUrls: ['./appartement-list-item.component.scss']
})
export class AppartementListItemComponent implements OnInit {

  @Input() appartement: any;

  constructor(private http: HttpClient, private userService: UserService) { }

  onReserver(id) {
    this.userService.addToLocalCart(id);
    window.alert(`${this.appartement.nom} ajouté à votre profil`);
  }
  ngOnInit() {
  }
}
