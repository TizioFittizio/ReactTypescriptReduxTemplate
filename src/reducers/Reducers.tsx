import { ContainerAction } from '../actions';
import { StoreState } from '../types/index';
import { SHUFFLE } from '../constants/index';

export function reducer(state: StoreState, action: ContainerAction): StoreState {
  switch (action.type) {
    /*case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };*/
    case SHUFFLE:
        console.log("!");
        return {...state, phrase: action.payload};
    default:
        return state;
  }
}