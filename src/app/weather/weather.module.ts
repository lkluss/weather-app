import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherMainComponent } from './weather-main/weather-main.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [WeatherMainComponent],
  imports: [
    CommonModule,
    MaterialModule    
  ]
})
export class WeatherModule { }
