import { LocationService } from './../services/location.service';
import { LocationModel } from './../models/LocationModel';
import * as LocationActions from './../actions/locations.actions';

import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';


@Injectable()
export class LocationEffects {

    loadLocations$ = createEffect(() => 
    this.actions$.pipe(
        ofType(LocationActions.loadLocations),
        mergeMap(action => 
            this.service.getLocations().pipe(
                map((locations: LocationModel[]) => LocationActions.loadLoactionsSuccess({locations: locations}),
                catchError(error => {
                    return of(LocationActions.loadLocationsFailure(error))
                })
            )))
    ))

    constructor(private actions$: Actions, private service: LocationService) {}  

}