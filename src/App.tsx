import * as React from 'react';
import './App.css';

import { createStore } from 'redux';
import { reducer } from './reducers/index';
import { StoreState } from './types/index';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StartPage from './containers/StartPage';
import StatelessComponent from './components/StatelessComponent/StatelessComponent';
import RoutePage from './containers/RoutePage';
import HeadComponent from './components/HeadComponent/HeadComponent';

const store = createStore<StoreState>(reducer, {
  phrase: "...or at least let's try",
  font: "Palatino Linotype"
});

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <div className="container-fluid">
          <HeadComponent />
          <BrowserRouter>
            <Switch>
              <Route path="/" exact={true} component={StartPage} />
              <Route path="/newPage/:value" component={RoutePage} />
              <Route component={this.notFoundPage} />
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }

  private notFoundPage = () => {
    return (
      <StatelessComponent name="Page not found!"/>
    );
  }

}

export default App;
