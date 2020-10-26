import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocationModel } from '../models/LocationModel';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  getLocations():Observable<LocationModel[]> {
    return this.http.get<LocationModel[]>(environment.locationsUrl);
  }


}
