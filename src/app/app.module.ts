
import { AppartementsDb } from './services/appartements.db';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { AppartementDetailComponent } from './appartement-detail/appartement-detail.component';
import { AppartementFormComponent } from './appartement-form/appartement-form.component';
import { AppartementListItemComponent } from './appartement-list-item/appartement-list-item.component';
import { AppartementsComponent } from './appartements/appartements.component';

import { FilterPipeTab } from './services/filter-tab.pipe';
import {FilterPipeJson} from './services/filter-json.pipe';
import { DataService } from './services/Data.service';
import { AppartementListComponent } from './appartement-list/AppartementListComponent';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppartementListComponent,
    PageNotFoundComponent,
    SearchBarComponent,
    FooterComponent,
    AppartementDetailComponent,
    AppartementFormComponent,
    AppartementListItemComponent,
    AppartementsComponent,
    FilterPipeTab,
    FilterPipeJson,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
