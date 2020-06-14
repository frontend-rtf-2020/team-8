import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './Auth';
import Register from './Register';
import Users from './Users';
import Alert from './layout/Alert';
import RegisterVer from './RegisterVer';
// Redux
import { Provider } from 'react-redux';
import store from '../store';

import '../stylesheets/reset.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={Auth} />
      <Alert/>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Auth} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/thanks" component={RegisterVer} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
