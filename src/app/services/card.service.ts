import { catchError } from 'rxjs/operators';
import { WeatherModel } from 'src/app/models/WeatherModel';
import { BaseModel } from './../models/BaseModel';
import { environment } from './../../environments/environment.prod';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'protractor';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }

  getCardList():Observable<BaseModel[]>{
    return this.http.get<BaseModel[]>(environment.apiUrl + "/city");    
  }

  addNewCard(model):Observable<BaseModel>{
    let data = JSON.stringify(model.payload);
    return this.http.post<BaseModel>(environment.apiUrl + "/city", data, {
      headers: { 'Content-Type': 'application/json' }
    }).pipe(
      catchError(this.handleError));  
  }

  removeCard(id: string){
    return this.http.delete(`${environment.apiUrl}/city/${id}`);
  }

  getWeatherForCity(cityId: string):Observable<WeatherModel> {
    return this.http.get<WeatherModel>(`${environment.openWeatherApiUrl}weather?id=${cityId}&appid=${environment.OPEN_WEATHER_API_KEY}&units=metric`);
  }

  handleError(error) {
        let errorMessage = '';
 
    if (error.error instanceof ErrorEvent) {
 
      // client-side error
 
      errorMessage = `Error: ${error.error.message}`;
 
    } else {
 
      // server-side error
 
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
 
    } 
    window.alert(errorMessage); 
    return throwError(errorMessage);
 
  }
}
