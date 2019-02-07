import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppartementDetailComponent } from './appartement-detail/appartement-detail.component';
import { AppartementListComponent } from './appartement-list/AppartementListComponent';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { AppartementFormComponent } from './appartement-form/appartement-form.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'appartement-list', component: AppartementListComponent},
  {path: 'appartement-detail', component: AppartementDetailComponent},
  {path: 'user-signup', component: UserSignUpComponent},
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'user-sign-up', component: UserSignUpComponent},
  {path: 'appartement-form', component: AppartementFormComponent},
  {path: '', redirectTo: 'appartement-list', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
