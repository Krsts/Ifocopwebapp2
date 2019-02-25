# `Daymeetings`

Projet Réalisé avec [Angular CLI](https://github.com/angular/angular-cli) version 7.0.4.

## `Mode d'emploi` : 

L'application a été construite autour des fonctionnalités d'angular et de nodejs couplé avec mongodb.
Pour fonctionner l'application nécessite le lancement du serveur présent dans le dossier backend et de la base de donnée, qui peut être récupérée sur un hébergeur.

### Installation

>~/backend **nodemon**
>[MongoBase](https://google.com)
**mongod --dbpath** ***<***emplacement de la base***>***
>Exécuter **ng serve** à la racine du projet pour lancer l'application dans le navigateur.

### Utilisation

`La barre de recherche est la pièce centrale de l'application, permettant :`
- **d'effectuer une recherche**
- **naviguer d'une page à l'autre**
- **s'authentifier**
- **se déconnecter**

Dans la barre de recherche :
>Le texte plat lance automatiquement une recherche dans la base de données et filtre les résultats
>**!users** | pour retrouver la liste des utilisateurs enregistrés
>**!list** | pour récupérer la liste des offres
>**!u** ***<**username**>*** **!p** ***<**password**>*** **!s** | Pour s'authentifier
>**!profile**  | Pour visiter le profil utilisateur

>**!clock** ***<**Number**>*** **!s** | Pour mettre à jour la vitesse de mise à jour de la recherche. [>100ms]

#### Réserver un appartement :

>Créer un nouvel utilisateur en choisissant l'option s'enregistrer dans l'icône dans le coin supérieur droit de la page.
>L'authentification doit être automatique, toutefois il est possible de se connecter en suivant la méthode d'authentification de la barre de recherche ou en se loggant en suivant les instructions du menu situé dnas le coin supérieur droit de l'application.
>> Dans la barre de recherche il est possible d'ajouter un appartement en clickant sur l'image qui l'accompagne. Un message doit apparaître disant que l'appartement a bien été ajouté. Il peut être retrouvé en clickant sur le menu présent dans le coin supérieur droit de l'application.

> En clickant sur le nom de l'objet ajouté, vous êtes redirigé vers le détail du produit.
>Sur la page de détail il est possible de naviguer vers la page de paiment. La page de paiement n'implémente aucune fonctionnalité signifiante.

> Pour supprimer une réservation, il suffit d'appuyer sur la croix présente à côté du nom du produit dans le menu utilisateur.
>Il est possible d'envoyer les réservations vers la base de données en appuyant sur le bouton **upload cart**.
>Le cart envoyé vers la base est récupéré à la prochine connexion de l'utilisateur.

>**!détail** ***<**Index**>*** | Pour voir le détail du produit présent dans le menu des réservations en se basant sur l'index des réservations.

>**!loggout** | Pour se déconnecter.

<!-- 
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md). -->
