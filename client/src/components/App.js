import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './Auth';
import Register from './Register';
import RegisterVer from './RegisterVer';
import RegisterSecondVer from './RegisterSecondVer';
import PassRec1 from './PassRec1';
import Users from './Users';
import Chat from './Chat';
import Alert from './layout/Alert';
import PassRec2 from './PassRec2';

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
        <Route exact path="/registerver" component={RegisterVer} />
        <Route exact path="/registersecondver" component={RegisterSecondVer} />
        <Route exact path="/login" component={Auth} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/passrec1" component={PassRec1} />
        <Route exact path="/passrec2" component={PassRec2} />

      </Switch>
    </Router>
  </Provider>
);

export default App;
