import { filter } from 'rxjs/operators';
import { BaseModel } from './../models/BaseModel';
import { Action, createReducer, on, Store } from '@ngrx/store';
import * as CardActions from '../actions/cards.actions';

export const cardsFeatureKey = 'cards';

export interface CardState {
  cards: BaseModel[];
  cardsError: Error;
}

export const initialState: CardState = {
  cards: Array<BaseModel>(),
  cardsError: null
};


export const reducer = createReducer(
  initialState,
  on(CardActions.loadCards, state => state),
  on(CardActions.loadCardsSuccess,(state, { payload }) => {
    return { ...state, cards: payload};
  }),
  on(CardActions.loadCardsFailure, (state, error) =>{
    return { ...state, cardsError: error };
  }),
  on(CardActions.addCard, (state,  { payload }) => {
    return { ...state, cards: [...state.cards]}
  }),
  on(CardActions.addCardSuccess, (state, { payload }) => {
    return { ...state, cards: [...state.cards, payload]}
  }),
  on(CardActions.addCardFailure, (state, error: Error) => {
    return { ...state, cardsError: error };
  }),
  on(CardActions.removeCard, (state, { id }) =>{
    return {...state, cards: state.cards.filter(card => card.id !== id )}
  }),
  on(CardActions.removrCardFailure, (state, error: Error) => {
    return { ...state, cardsError: error };
  }),


);

export function CardReducer(
  state: CardState | undefined,
  action: Action
): CardState {
  return reducer(state, action);
}
