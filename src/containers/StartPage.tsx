import StartPage from '../components/StartPage/StartPage';
import * as actions from "../actions";
import { StoreState } from '../types';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps({phrase, font}: StoreState) {
  return {
    phrase,
    font
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.ContainerAction>) {
  return {
    shuffle: () => dispatch(actions.shuffle()),
    changeFont: () => dispatch(actions.changeFont())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);