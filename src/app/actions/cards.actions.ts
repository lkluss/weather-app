import { BaseModel } from './../models/BaseModel';
import { createAction, props } from '@ngrx/store';

export const loadCards = createAction('[Cards] Load Cards');

export const loadCardsSuccess = createAction('[Cards] Load Cards Success', 
  props<{ payload: BaseModel[] }>()
);

export const loadCardsFailure = createAction('[Cards] Load Cards Failure',
  props<Error>()
);

export const addCard = createAction('[Cards] Add Card',
    props<{ payload: BaseModel }>()
);

export const addCardSuccess = createAction('[Cards] Add Card Success',
    props<{ payload: BaseModel }>()
);

export const addCardFailure = createAction('[Cards] Add Card Failure',
    props<Error>()
);

export const removeCard = createAction('[Cards] Remove Card', 
props<{ id:string }>()
);

export const removeCardSuccess = createAction('[Cards] Remove Card Success', 
props<{ payload :BaseModel }>()
);

export const removrCardFailure = createAction('[Cards] Remove Card Failure',
    props<Error>()
);

