import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppartementDetailComponent } from './appartement-detail/appartement-detail.component';
import { AppartementListComponent } from './appartement-list/AppartementListComponent';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { AppartementFormComponent } from './appartement-form/appartement-form.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ContactComponent } from './contact/contact.component';
import { CookiesComponent } from './cookies/cookies.component';
import { PresentationComponent } from './presentation/presentation.component';
import { RgpdComponent } from './rgpd/rgpd.component';
import { AvisComponent } from './avis/avis.component';
import { PaiementComponent } from './paiement/paiement.component';


const routes: Routes = [


  { path: 'home', component: HomeComponent },
  { path: 'appartement-list', component: AppartementListComponent },
  { path: 'appartement-detail/:name', component: AppartementDetailComponent },
  { path: 'user-signup', component: UserSignUpComponent },
  { path: 'cookies', component: CookiesComponent },
  { path: 'avis', component: AvisComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'paiement', component: PaiementComponent },
  { path: 'RGPD', component: RgpdComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'users-list', component: UsersListComponent },
  { path: 'user-profile/:userName', component: UserProfileComponent },
  { path: 'user-sign-up', component: UserSignUpComponent },
  //   {path: 'user-profile', component: UserProfileComponent},
  { path: 'user-sign-up', component: UserSignUpComponent },
  { path: 'appartement-form', component: AppartementFormComponent },
  { path: '', redirectTo: 'home  ', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
  //   { path: 'home', component: HomeComponent },
  //   { path: 'appartement-list', component: AppartementListComponent },
  //   { path: 'appartement-detail', component: AppartementDetailComponent },
  //   { path: 'user-signup', component: UserSignUpComponent },
  //   { path: 'users-list', component: UsersListComponent },

  //   { path: 'appartement-form', component: AppartementFormComponent },
  //   { path: '', redirectTo: 'appartement-list', pathMatch: 'full' },
  //   { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
