import { BaseModel } from './../models/BaseModel';
import { CardService } from './../services/card.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import * as CardActions from '../actions/cards.actions';


@Injectable()
export class CardEffects {

  loadCards$ = createEffect(() => 
  this.actions$.pipe(
      ofType(CardActions.loadCards),
      mergeMap(action => 
          this.service.getCardList().pipe(
              map((cards: BaseModel[]) => CardActions.loadCardsSuccess({payload: cards}),
              catchError(error => {
                  return of(CardActions.loadCardsFailure(error))
              })
          )))
  ))

  addCard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardActions.addCard),
      mergeMap(action =>
        this.service.addNewCard(action).pipe(
          map((data: BaseModel) => CardActions.addCardSuccess({payload : data})),
          catchError(error => {return of(CardActions.addCardFailure(error))})
        ))
    )
  )

  removeCard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardActions.removeCard),
      mergeMap(action => 
        this.service.removeCard(action.id).pipe(
          map((data: BaseModel) => CardActions.removeCardSuccess({payload : data})),
          catchError(error => {return of(CardActions.removrCardFailure(error))})
        )
      )
    )
  )

  constructor(private actions$: Actions, private service: CardService) {}

}
