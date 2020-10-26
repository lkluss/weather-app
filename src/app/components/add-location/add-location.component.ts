import { BaseModel } from './../../models/BaseModel';
import { find, map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { LocationModel } from 'src/app/models/LocationModel';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.less']
})
export class AddLocationComponent implements OnInit, OnDestroy {

  public locations$: Observable<LocationModel[]>;
  public form: FormGroup;
  public cityName = new FormControl('', Validators.required);

  private locationAddSubscription: Subscription;

  constructor(private store: Store<{state:any}>) { 
    this.form = new FormGroup({
      city: this.cityName
    });
  }

  ngOnInit(): void {
    this.store.dispatch({type: '[Locations] Load Locations'});   
    this.locations$ = this.store.select(state => state.state.LocationReducer.locations);
  }

  ngOnDestroy(){
    this.locationAddSubscription.unsubscribe();
  }

  onSubmit(){
    if(this.form.valid){
      let newModel: BaseModel = { name: "", id: this.cityName.value}
      this.store.dispatch({type: '[Cards] Add Card', payload : newModel})
      this.form.reset();
    }   
  }

}
