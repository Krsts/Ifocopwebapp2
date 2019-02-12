
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Appartement } from '../shared/appartement.model';



@Component({
  selector: 'app-appartement-form',
  templateUrl: './appartement-form.component.html',
  styleUrls: ['./appartement-form.component.scss']
})
export class AppartementFormComponent implements OnInit {

  appartement: Appartement;

  appartementForm = new FormGroup({
    nom: new FormControl('Superbe Appartement', [Validators.required, Validators.minLength(3)]),
    adresse: new FormControl('20 rue de l\'éspérance', [Validators.required, Validators.minLength(1)]),
    codePostal: new FormControl('75017', [Validators.minLength(3)]),
    ville: new FormControl('Paris'),
    superficie: new FormControl('50', [Validators.required, Validators.email]),
    étage: new FormControl('3'),
    nombre_de_pièces: new FormControl('3', [Validators.required]),
    capacité: new FormControl('10'),
    salle1: new FormControl(''),
    superficie_salle_1: new FormControl(''),
    tarif_demi_journée_salle_1: new FormControl(''),
    tarif_journée_journée_salle_1: new FormControl(''),
    tarif_soirée_salle1: new FormControl(''),
    // salle2: new FormControl(''),
    // salle3: new FormControl(''),
    // salle4: new FormControl(''),

    supplément_restauration: new FormControl(),
    supplément_location_de_matériel: new FormControl(),
    wifi: new FormControl(),
    animaux_accpetés: new FormControl(),
    diffusion_de_musqiue: new FormControl(),
    transports_en_commun: new FormControl(),
    accès_handicapé: new FormControl(),
    parking_privé: new FormControl(),
    descriptif: new FormControl(),
    type_devenements_acceptés: new FormControl(),
    prestations_annexes: new FormControl(),
    fumeur: new FormControl(),
    img1: new FormControl(),
    img2: new FormControl(),
    img3: new FormControl(),
    img4: new FormControl(),
    img5: new FormControl()
  });

  onSubmitAppartement() {
    return 0;
  }

  constructor() { }

  ngOnInit() {
  }

}
