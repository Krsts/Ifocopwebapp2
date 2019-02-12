
export interface Appartement {

    // id: number;
    nom: string;
    adresse: string;
    codePostal: string;
    ville: string;
    superficie: number;
    étage: number;
    nombre_de_pièces: number;
    capacité: string;

    salles: [{
        salle1: {
            nom: string;
            superficie: string;
            tarif_demi_journée: number;
            tarif_journée: number;
            tarif_soirée: number;
        };
        // salle2?: {
        //     superficie: string;
        //     tarif_demi_journée: number;
        //     tarif_journée: number;
        //     tarif_soirée: number;
        // };
        // salle3?: {
        //     superficie: string;
        //     tarif_demi_journée: number;
        //     tarif_journée: number;
        //     tarif_soirée: number;
        // };
        // salle4?: {
        //     superficie: string;
        //     tarif_demi_journée: number;
        //     tarif_journée: number;
        //     tarif_soirée: number;
        // };
        // toutes_les_salles?: {
        //     superficie: string;
        //     tarif_demi_journée: number;
        //     tarif_journée: number;
        //     tarif_soirée: number;
        // }
    }];

    supplément_restauration: number;
    supplément_location_de_matériel: number;
    wifi: boolean;
    animaux_accpetés: boolean;
    diffusion_de_musique: boolean;
    transports_en_commun: string[];
    acces_handicapé: boolean;
    parking_: boolean;
    parking_privé: boolean;
    descriptif: boolean;
    type_devenements_accpetés: string[];
    prestations_annexes: string[];
    fumeur: boolean;
    img1: string;
    img2?: string;
    img3?: string;
    img4?: string;
    img5?: string;

}
