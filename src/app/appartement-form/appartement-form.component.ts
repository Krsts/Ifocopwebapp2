
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
    salle1_nom: new FormControl('Salle 1'),
    superficie_salle_1: new FormControl('50'),
    tarif_demi_journée_salle_1: new FormControl('30'),
    tarif_journée_journée_salle_1: new FormControl('50'),
    tarif_soirée_salle_1: new FormControl('40'),
    // salle2: new FormControl(''),
    // salle3: new FormControl(''),
    // salle4: new FormControl(''),

    supplément_restauration: new FormControl('35'),
    supplément_location_de_matériel: new FormControl('20'),
    wifi: new FormControl(true),
    animaux_accpetés: new FormControl(true),
    diffusion_de_musqiue: new FormControl(true),
    transports_en_commun: new FormControl(true),
    accès_handicapé: new FormControl(true),
    parking_privé: new FormControl(true),
    descriptif: new FormControl('Le meilleur appartement de la ville'),
    type_devenements_acceptés: new FormControl('En tout bien tout honneur'),
    prestations_annexes: new FormControl('Massage'),
    fumeur: new FormControl(false),
    img1: new FormControl(),
    img2: new FormControl(null),
    img3: new FormControl(null),
    img4: new FormControl(null),
    img5: new FormControl(null)
  });

  onSubmitAppartement() {
    this.appartement = {
      nom: this.appartementForm.get('nom').value,
      adresse: this.appartementForm.get('adresse').value,
      codePostal: this.appartementForm.get('codePostal').value,
      ville: this.appartementForm.get('ville').value,
      superficie: this.appartementForm.get('superficie').value,
      étage: this.appartementForm.get('étage').value,
      nombre_de_pièces: this.appartementForm.get('nombre_de_pièces').value,
      capacité: this.appartementForm.get('capacité').value,
      // salle: this.appartementForm.get('salle1_nom'),
    };
    return console.log('Not ready yet');
  }

  constructor() { }

  ngOnInit() {
  }

}
