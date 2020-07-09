import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Car {
  vin;
  year;
  brand;
  color;
}

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) {}

  getCarsSmall() {
    return this.http.get('/assets/cars-small.json')
      .toPromise()
      .then( (res: any) => res.data as Car[])
      .then(data => data);
  }
}
