import * as React from 'react';
import './App.css';

import { createStore } from 'redux';
import { reducer } from './reducers/index';
import { StoreState } from './types/index';
import { Provider } from 'react-redux';
import StartPage from './containers/StartPage';

const store = createStore<StoreState>(reducer, {
  phrase: "...or at least let's try",
  font: "Palatino Linotype"
});

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <StartPage />
      </Provider>
    );
  }
}

export default App;
