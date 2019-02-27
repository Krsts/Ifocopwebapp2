import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/Data.service';
import { AppartementService } from '../services/appartement.service';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ready = false;
  appartements;
  appartement_1;
  appartement_2;
  appartement_3;
  appartement_4;
  appartement_5;
  appartement_6;

  constructor(private appartementService: AppartementService,
    private userService: UserService) { }

  onReserver(id) {
    if (this.userService.getStatus()) {
      this.userService.addToLocalCart(id);
      window.alert(`${id} ajouté à votre profil`);
    } else { window.alert('Connectez-vous pour réserver l\'appartement'); }
  }

  ngOnInit() {
    this.appartementService.getAllappartements().subscribe((data: {}) => {
      this.appartements = data['appartements'];
      try {
        this.appartement_1 = this.appartements[Math.floor(Math.random() * this.appartements.length)];
        this.appartement_2 = this.appartements[Math.floor(Math.random() * this.appartements.length)];
        this.appartement_3 = this.appartements[Math.floor(Math.random() * this.appartements.length)];
        this.appartement_4 = this.appartements[Math.floor(Math.random() * this.appartements.length)];
        this.appartement_5 = this.appartements[Math.floor(Math.random() * this.appartements.length)];
        this.appartement_6 = this.appartements[Math.floor(Math.random() * this.appartements.length)];
        this.ready = true;
      } catch{ }
    }
    )
  }

}
