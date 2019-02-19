var mongoose = require('mongoose');
var Appartement = mongoose.model('Appartement', {
    nom: {
        type: String,
        // required: true,
        //     minlength: 3,
        //     trim: true
    },
    adresse: {
        type: String,
        // required: true,
        // minlength: 1,
        // trim: true
    },
    codePostal: {
        type: String,
        // required: true,
        // minlength: 1,
        // trim: true
    },
    ville: {
        type: String,
        // required: false,
        // minlength: 3,
        // trim: true,
    },
    superficie: {
        type: String,
        // required: true,
        // minlength: 5,
        // trim: true,
    },
    étage: {
        type: String,
        // required: false,
        // minlength: 3,
        // trim: true
    },
    nombre_de_pièces: {
        type: String,
        // required: true,
        // minlength: 3,
        // trim: true,
    },
    capacité: {
        type: String,
        // required: true,
        // minlength: 1,
        // trim: true
    },
    supplément_restauration: {
        type: String,
        // required: true,
        // minlength: 1,
        // trim: true
    },
    supplément_location_de_matériel: {
        type: String,
        // required: true,
        // minlength: 1,
        // trim: true
    },
    wifi: {
        type: String,
        // required: true,
        // minlength: 1,
        // trim: true
    },
    animaux_accpetés: {
        type: String,
        // required: true,
        // minlength: 1,
        // trim: true
    },
    diffusion_de_musique: {
        type: String,
        // required: true,
        // minlength: 1,
        // trim: true
    },
    transports_en_commun: {
        type: String,
        // required: true,
        // minlength: 1,
        // trim: true
    },
    accès_handicapé: {
        type: String,
        // required: true,
        // minlength: 1,
        // trim: true
    },
    parking_public: {
        type: String,
        // required: true,
        // minlength: 1,
        // trim: true
    },
    parking_privé: {
        type: String,
        // required: true,
        // minlength: 1,
        // trim: true
    },
    descriptif: {
        type: String,
        // required: true,
        // minlength: 1,
        // trim: true
    },
    type_devenements_acceptés: {
        type: String,
        // required: false
    },
    prestations_annexes: {
        type: String,
        // required: true,
        // minlength: 1,
        // trim: true
    },
    fumeur: {
        type: String,
        // required: true,
        // minlength: 1,
        // trim: true
    },
    img1: {
        type: String,
        // required: true,
        // minlength: 1,
        // trim: true
    },
    img2: {
        type: String,
        // required: true,
        // minlength: 1,
        // trim: true
    },
    img3: {
        type: String,
        // required: true,
        // minlength: 1,
        // trim: true
    },
    img4: {
        type: String,
        // required: true,
        // minlength: 1,
        // trim: true
    },
    img5: {
        type: String,
        // required: true,
        // minlength: 1,
        // trim: true
    },

});

module.exports = { Appartement };