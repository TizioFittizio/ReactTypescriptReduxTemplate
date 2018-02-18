import StartPage from '../components/StartPage/StartPage';
import * as actions from "../actions";
import { StoreState } from '../types';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps({phrase}: StoreState) {
  return {
    phrase
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.ContainerAction>) {
  return {
    shuffle: () => dispatch(actions.shuffle()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);