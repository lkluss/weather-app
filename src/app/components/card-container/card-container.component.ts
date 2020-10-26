import { CardService } from './../../services/card.service';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { WeatherModel } from 'src/app/models/WeatherModel';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.less']
})
export class CardContainerComponent implements OnInit {

  @Input() cityId: string;

  public cardDetails$: Observable<WeatherModel>;

  constructor(private cardService: CardService, private store:Store<{state: any}>) { }

  ngOnInit(): void {
    this.cardDetails$ = this.cardService.getWeatherForCity(this.cityId);  
  }

  removeCard(){
    this.store.dispatch({ type: '[Cards] Remove Card', id: this.cityId });
  }

  getIcon(icon:string){
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
  }

}
