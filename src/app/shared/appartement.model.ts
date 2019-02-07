
export class Appartement {
    constructor(
        public id: number,
        public nom: string,
        public adresse: string,
        public codePostal: string,
        public ville: string,
        public superficie: number,
        public étage: number,
        public nombre_de_pieces: number,
        public capacité: string,

        public salles: [{
            salle1: {
                superficie: string,
                tarif_demi_journée: number,
                tarif_journée: number,
                tarif_soirée: number,
            },
            salle2?: {
                superficie: string,
                tarif_demi_journée: number,
                tarif_journée: number,
                tarif_soirée: number,
            },
            salle3?: {
                superficie: string,
                tarif_demi_journée: number,
                tarif_journée: number,
                tarif_soirée: number,
            },
            salle4?: {
                superficie: string,
                tarif_demi_journée: number,
                tarif_journée: number,
                tarif_soirée: number,
            },
            toutes_les_salles?: {
                superficie: string,
                tarif_demi_journée: number,
                tarif_journée: number,
                tarif_soirée: number,
            }
        }],

        public supplément_restauration: number,
        public supplément_location_de_matériel: number,
        public wifi: boolean,
        public animaux_accpetés: boolean,
        public diffusion_de_musique: boolean,
        public transports_en_commun: string[],
        public acces_handicapé: boolean,
        public parking_public: boolean,
        public parking_privé: boolean,
        public descriptif: boolean,
        public type_devenements_accpetés: string[],
        public prestations_annexes: string[],
        public fumeur: boolean,
        public img1: string,
        public img2?: string,
        public img3?: string,
        public img4?: string,
        public img5?: string

    ) { }

}
