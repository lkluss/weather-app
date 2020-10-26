import { LocationReducer } from './reducers/location.reducer';
import { CardReducer } from './reducers/card.reducer';

import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { EffectsModule } from '@ngrx/effects';
import { combineReducers, StoreModule } from '@ngrx/store';

import { LocationService } from './services/location.service';
import { CardService } from './services/card.service';

import { AppComponent } from './app.component';
import { WeatherMainComponent } from './components/weather-main/weather-main.component';

import { CardEffects } from './effects/card.effects';
import { LocationEffects } from './effects/location.effects';
import { ReactiveFormsModule } from '@angular/forms';
import { AddLocationComponent } from './components/add-location/add-location.component';
import { CardContainerComponent } from './components/card-container/card-container.component';

export const reducers = combineReducers({
  LocationReducer, CardReducer
});

@NgModule({
  declarations: [
    AppComponent,
    WeatherMainComponent,
    AddLocationComponent,
    CardContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({state: reducers}),
    EffectsModule.forRoot([CardEffects, LocationEffects])
  ],
  providers: [
    CardService,
    LocationService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
