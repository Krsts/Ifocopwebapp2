import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppartementDetailComponent } from './appartement-detail/appartement-detail.component';
import { AppartementListComponent } from './appartement-list/AppartementListComponent';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'appartement-list', component: AppartementListComponent},
  { path: 'appartement-detail', component: AppartementDetailComponent},
  {path: '', redirectTo: '/appartement-list', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
