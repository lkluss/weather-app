import { LocationModel } from './../models/LocationModel';
import { createAction, props } from '@ngrx/store';

export const loadLocations = createAction('[Locations] Load Locations');

export const loadLoactionsSuccess = createAction('[Locations] Load Locations Success', 
  props<{ locations: LocationModel[] }>()
  );

export const loadLocationsFailure = createAction('[Locations] Load Locations Failure',
  props<{ error: any }>()
);
