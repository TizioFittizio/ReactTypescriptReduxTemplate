import { ContainerAction } from '../actions';
import { StoreState } from '../types';
import { SHUFFLE, CHANGE_FONT, FETCH_DATA } from '../constants';

export function reducer(state: StoreState, action: ContainerAction): StoreState {
  switch (action.type) {
    case CHANGE_FONT:
        return {...state, font: action.payload};
    case SHUFFLE:
        return {...state, phrase: action.payload};
    case FETCH_DATA:
        alert(`Data fetched!\n${action.payload.data.title}`);
        return {...state};
    default:
        return state;
  }
}