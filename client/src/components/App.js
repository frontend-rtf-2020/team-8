import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './Auth';
import Register from './Register';
import Users from './Users';
// Redux
import { Provider } from 'react-redux';
import store from '../store';

import '../stylesheets/reset.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={Auth} />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Auth} />
        <Route exact path="/users" component={Users} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
