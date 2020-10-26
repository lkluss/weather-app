import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherMainComponent } from './components/weather-main/weather-main.component';


const routes: Routes = [
  {path: '', component: WeatherMainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
