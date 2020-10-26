import { BaseModel } from './../../models/BaseModel';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.less']
})
export class WeatherMainComponent implements OnInit {

  cards$: Observable<BaseModel[]>;

  constructor(private store: Store<{state: any}>) { }

  ngOnInit(): void {
    this.store.dispatch({type: '[Cards] Load Cards'});   
    this.cards$ = this.store.select(state => state.state.CardReducer.cards);
  }

}
