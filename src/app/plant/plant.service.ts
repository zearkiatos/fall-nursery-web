import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Plant from './plant';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlantService {
  private apiUrl: string = `${environment.PLANT_BASE_API_URL}/202212_MISW4104_Grupo2.json`;

  constructor(private http: HttpClient) {}

  getPlants(): Observable<Plant[]> {
    return this.http.get<Plant[]>(this.apiUrl);
  }
}
