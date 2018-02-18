import { ContainerAction } from '../actions';
import { StoreState } from '../types';
import { SHUFFLE, CHANGE_FONT } from '../constants';

export function reducer(state: StoreState, action: ContainerAction): StoreState {
  switch (action.type) {
    case CHANGE_FONT:
        console.log(state);
        return {...state, font: action.payload};
    case SHUFFLE:
        console.log(state);
        return {...state, phrase: action.payload};
    default:
        return state;
  }
}