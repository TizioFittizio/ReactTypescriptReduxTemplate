import * as actions from "../actions";
import { StoreState } from '../types';
import { connect, Dispatch } from 'react-redux';
import RoutePage from '../components/RoutePage/RoutePage';

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

export default connect(mapStateToProps, mapDispatchToProps)(RoutePage as any);