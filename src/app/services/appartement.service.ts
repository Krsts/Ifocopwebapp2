import { Appartement } from './../shared/appartement.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppartementService {

  // Typage! ?????????????????????????????????????????!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  baseUrl = 'http://localhost:3000/appartement-list';
  private appartements: Appartement[];
  constructor(private http: HttpClient) { }

  getAllappartements(): Observable<Appartement[]> {
    return this.http.get<Appartement[]>(this.baseUrl);
  }

  getAppartementByName(appartement: Object): Observable<Appartement[]> {
    return this.http.get<Appartement[]>(this.baseUrl + '/' + appartement['nom']);
  }
  uploadImage(fd) {
    return this.http.post('http://localhost:3000/appartement-list/upload', fd);
    }

  findAll(): Appartement[] {
    return this.appartements;
  }
  find(nom: string): Appartement {
    return this.appartements[this.getSelectedIndex(nom)];
  }
  private getSelectedIndex(nom: string) {
    for (let i = 0; i < this.appartements.length; i++) {
      if (this.appartements[i].nom === nom) {
        return i;
      }
    }
    return -1;
  }
  addAppartement(appartement: Appartement) {
    return this.http.post(this.baseUrl, appartement);
  }
}
