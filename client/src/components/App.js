import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './Auth';
import Register from './Register';
import Users from './Users';

import '../stylesheets/reset.css';

const App = () => (
  <Router>
    <Route exact path="/" component={Auth} />
    <Switch>
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Auth} />
      <Route exact path="/users" component={Users} />
    </Switch>
  </Router>
);

export default App;
