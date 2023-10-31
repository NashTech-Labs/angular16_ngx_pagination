import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarDetails } from '../models/cars-details.model';
@Injectable({
  providedIn: 'root',
})
export class CarsDataService {
  private jsonUrl = 'assets/cardata.json';

  constructor(private http: HttpClient) {}

  getCarModels(): Observable<CarDetails[]> {
    return this.http.get<CarDetails[]>(this.jsonUrl);
  }
}
