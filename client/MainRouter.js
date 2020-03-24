import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import signin from './auth/Signin'
import signup from './user/Signup'

class MainRouter extends Component {
  render() {
    return (<div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/signin" component={signin}/>
        <Route path="/signup" component={signup}/>
      </Switch>
    </div>)
  }
}
export default MainRouter