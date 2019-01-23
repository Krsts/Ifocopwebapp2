import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppartementListComponent } from './appartement-list/appartement-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { AppartementDetailComponent } from './appartement-detail/appartement-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppartementListComponent,
    PageNotFoundComponent,
    SearchBarComponent,
    FooterComponent,
    AppartementDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
