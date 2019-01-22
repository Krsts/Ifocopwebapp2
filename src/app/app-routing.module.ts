import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppartementListComponent } from './appartement-list/appartement-list.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'appartement-list', component: AppartementListComponent},
  {path: '', redirectTo: '/appartement-list', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
