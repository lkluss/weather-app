import { LocationModel } from './../models/LocationModel';
import * as LocationActions from './../actions/locations.actions';
import { Action, createReducer, on } from '@ngrx/store';


export const locationFeatureKey = 'location';

export interface LocationState {
  locations: LocationModel[];
}

export const initialState: LocationState = {
  locations: Array<LocationModel>()
};


export const reducer = createReducer(
  initialState,
  on(LocationActions.loadLocations, state => state),
  on(LocationActions.loadLoactionsSuccess,(state, { locations }) => {
    return { ...state, locations: locations };
  }),
  on(LocationActions.loadLocationsFailure, (state, error) =>{
    console.error(error);
    return { ...state, ToDoError: error };
  })
);

export function LocationReducer(
  state: LocationState | undefined,
  action: Action
): LocationState {
  return reducer(state, action);
}
