import { Injectable } from '@angular/core';

@Injectable()({
    provideIn: 'root'
})
export class DataService {
    public storage: any;
    public constructor() {
    }
}